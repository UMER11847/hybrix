import { NextResponse } from "next/server";
import { openrouter } from "@/lib/openrouter";
import fs from "fs";
import path from "path";

// Cache the knowledge data at module level (loads once, reused for all requests)
let cachedBusinessData: string | null = null;

async function getBusinessData(): Promise<string> {
  // Return cached data if already loaded
  if (cachedBusinessData) {
    return cachedBusinessData;
  }

  const knowledgePath = path.join(process.cwd(), "lib", "knowledge", "company.json");
  
  try {
    const rawData = await fs.promises.readFile(knowledgePath, "utf-8");
    cachedBusinessData = JSON.stringify(JSON.parse(rawData), null, 2);
    return cachedBusinessData;
  } catch (fsError) {
    console.error("Failed to read knowledge base file:", fsError);
    return "No company background data available.";
  }
}

// Detect if user wants to book an appointment
function isAppointmentRequest(userMessage: string): boolean {
  const appointmentKeywords = [
    "book",
    "appointment",
    "schedule",
    "meeting",
    "demo",
    "call",
    "consultation",
    "session",
  ];
  const lowerMessage = userMessage.toLowerCase();
  return appointmentKeywords.some(keyword => lowerMessage.includes(keyword));
}

// Save appointment to JSON file
async function saveAppointment(
  userName: string,
  userEmail: string,
  appointmentDate: string,
  appointmentTime: string
): Promise<void> {
  const appointmentsPath = path.join(process.cwd(), "public", "appointments.json");
  
  try {
    let appointments = [];
    
    // Read existing appointments if file exists
    try {
      const existingData = await fs.promises.readFile(appointmentsPath, "utf-8");
      appointments = JSON.parse(existingData);
    } catch {
      // File doesn't exist yet, start with empty array
      appointments = [];
    }
    
    // Add new appointment
    appointments.push({
      id: Date.now(),
      name: userName,
      email: userEmail,
      date: appointmentDate,
      time: appointmentTime,
      bookedAt: new Date().toISOString(),
    });
    
    // Write back to file
    await fs.promises.writeFile(appointmentsPath, JSON.stringify(appointments, null, 2));
  } catch (error) {
    console.error("Failed to save appointment:", error);
  }
}

export async function POST(req: Request) {
  try {
    // 1. FIRST: Parse the request body
    const body = await req.json();
    const { messages } = body;

    // Safety check: make sure messages array exists
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ text: "Invalid message format received." }, { status: 400 });
    }

    // Get the last user message
    const lastUserMessage = messages[messages.length - 1]?.content || "";

    // Check if this is an appointment request
    if (isAppointmentRequest(lastUserMessage)) {
      // Extract information from the message using a simple approach
      const appointmentPrompt = {
        role: "system" as const,
        content: `Extract the following information from the user's appointment request:
1. User's name (if provided, otherwise ask)
2. User's email (if provided, otherwise ask)
3. Preferred date (in YYYY-MM-DD format)
4. Preferred time (in HH:MM format)

Respond in JSON format like:
{"name": "John Doe", "email": "john@example.com", "date": "2024-12-25", "time": "14:00", "needsInfo": false, "missingFields": []}

If any information is missing, set needsInfo to true and list missing fields.`,
      };

      const extractionMessages = [
        appointmentPrompt,
        { role: "user" as const, content: lastUserMessage },
      ];

      const extractionResult = await openrouter.chat.send({
        chatRequest: {
          model: "openai/gpt-oss-120b:free",
          messages: extractionMessages as any,
          maxTokens: 200,
        },
      });

      const extractedText =
        extractionResult.choices?.[0]?.message?.content || "{}";

      try {
        const appointmentData = JSON.parse(extractedText);

        if (
          appointmentData.name &&
          appointmentData.email &&
          appointmentData.date &&
          appointmentData.time &&
          !appointmentData.needsInfo
        ) {
          // Save the appointment
          await saveAppointment(
            appointmentData.name,
            appointmentData.email,
            appointmentData.date,
            appointmentData.time
          );

          return NextResponse.json({
            text: `Great! I've booked your appointment for ${appointmentData.date} at ${appointmentData.time}. A confirmation email will be sent to ${appointmentData.email}. We look forward to speaking with you!`,
          });
        } else {
          // Need more information
          return NextResponse.json({
            text: `To book your appointment, I'll need a few details:\n- Your full name\n- Your email address\n- Preferred date (e.g., December 25, 2024)\n- Preferred time (e.g., 2:00 PM)\n\nPlease provide these details and I'll confirm your appointment.`,
          });
        }
      } catch (parseError) {
        console.error("Failed to parse appointment data:", parseError);
      }
    }

    // 2. Get cached business data (fast on subsequent calls)
    const businessData = await getBusinessData();

    // 3. Define the System Prompt
    const systemPrompt = {
      role: "system" as const,
      content: `You are a conversational AI assistant for HybrixAI. Answer questions naturally and concisely.

Company Knowledge Base:
===
${businessData}
===

Response Guidelines:
- Keep replies SHORT and conversational (2-3 sentences max).
- Answer ONLY what was asked - avoid long lists, tables, or comprehensive overviews unless specifically requested.
- Use simple language, not complex formatting or markdown tables.
- If you don't know something or it's not in the knowledge base, say "I'd recommend speaking with our sales team for that."
- Be helpful, professional, and friendly.`,
    };

    // 4. Slice the array to only keep the last 6 messages
    const recentMessages = messages.slice(-6);

    // Clean and format the recent history array for OpenRouter's validation rules
    const formattedHistory = recentMessages.map((msg: any) => {
      let matchedRole: "user" | "assistant" | "system" = "user";

      const incomingRole = String(msg.role).toLowerCase();
      if (incomingRole === "system" || incomingRole === "developer") {
        matchedRole = "system";
      } else if (
        incomingRole === "assistant" ||
        incomingRole === "bot" ||
        incomingRole === "chatbot"
      ) {
        matchedRole = "assistant";
      } else {
        matchedRole = "user";
      }

      return {
        role: matchedRole as "user" | "assistant" | "system",
        content: String(msg.content || ""),
      };
    });

    // Combine system instructions with recent history
    const fullConversation = [systemPrompt, ...formattedHistory] as const;

    // 5. Send the structured history array to OpenRouter
    const completion = await openrouter.chat.send({
      chatRequest: {
        model: "openai/gpt-oss-120b:free",
        messages: fullConversation as any,
        maxTokens: 250,
      },
    });

    // 6. Return the response text back to your LiveDemo component
    const aiResponse =
      completion.choices?.[0]?.message?.content ||
      "Sorry, I couldn't formulate a proper response at the moment.";

    return NextResponse.json({ text: aiResponse });
  } catch (error) {
    console.error("Error encountered in Chat Route:", error);
    return NextResponse.json(
      { text: "An error occurred while communicating with the server." },
      { status: 500 }
    );
  }
}