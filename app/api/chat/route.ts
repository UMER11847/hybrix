import { NextResponse } from "next/server";
import { openrouter } from "@/lib/openrouter";
import fs from "fs";
import path from "path";
export const runtime = "nodejs";
export const maxDuration = 60;
export const dynamic = "force-dynamic";

const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || "openai/gpt-oss-120b:free";
const OPENROUTER_TIMEOUT_MS = 20000;

function buildLocalResponse(userMessage: string, businessData: string): string {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes("pricing") || lowerMessage.includes("price") || lowerMessage.includes("plan")) {
    return "HybrixAI offers starter, growth, pro, and enterprise packages. Starter starts at $249/month, Growth at $599/month, and Pro at $1,499/month. If you want, I can also point you to the pricing section.";
  }

  if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("what do you do")) {
    return "We help businesses automate customer conversations with AI chatbots, voice agents, appointment booking, lead capture, and marketing automation. Our focus is on service businesses that want faster response times and fewer missed opportunities.";
  }

  if (lowerMessage.includes("industry") || lowerMessage.includes("sector")) {
    return "We work with healthcare, real estate, salons, restaurants, automotive, and law firms. We tailor the experience to each vertical’s booking, lead capture, and support workflows.";
  }

  if (lowerMessage.includes("demo") || lowerMessage.includes("book") || lowerMessage.includes("appointment")) {
    return "You can book a demo or consultation with our team directly from the site. I can also help you find the demo section if you want to jump there.";
  }

  if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("whatsapp")) {
    return `You can reach us at ${businessData.includes("hybrixai@gmail.com") ? "hybrixai@gmail.com" : "our contact team"} or through WhatsApp chat.`;
  }

  if (lowerMessage.includes("benefit") || lowerMessage.includes("why")) {
    return "The main benefits are faster response times, 24/7 availability, better lead capture, reduced missed calls, and lower operational overhead for your team.";
  }

  return `HybrixAI provides AI chatbots, voice agents, appointment automation, lead generation, and social media automation for service businesses. If you want, I can help you find the right section or explain pricing and features in more detail.`;
}

// Cache the knowledge data at module level (loads once, reused for all requests)
let cachedBusinessData: string | null = null;

async function callOpenRouter(messages: Array<{ role: "user" | "assistant" | "system"; content: string }>, maxTokens: number) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is missing on the server.");
  }

  return await Promise.race([
    openrouter.chat.send({
      chatRequest: {
        model: OPENROUTER_MODEL,
        messages: messages as any,
        maxTokens,
      },
    }),
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("OpenRouter request timed out.")), OPENROUTER_TIMEOUT_MS);
    }),
  ]);
}

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
    let body: any;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ text: "Invalid request body." }, { status: 400 });
    }

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

      const extractionResult = await callOpenRouter(extractionMessages as any, 200);

      const extractedText =
        extractionResult.choices?.[0]?.message?.content || "{}";

      try {
let appointmentData;

try {
  appointmentData = JSON.parse(extractedText);
} catch (e) {
  console.error("Invalid JSON from model:", extractedText);

  return NextResponse.json({
    text: "I couldn't understand the appointment details. Please try again with name, email, date, and time.",
  });
}
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

    try {
      // 5. Send the structured history array to OpenRouter
      const completion = await callOpenRouter(fullConversation as any, 250);

      // 6. Return the response text back to your LiveDemo component
      const aiResponse =
        completion.choices?.[0]?.message?.content ||
        "Sorry, I couldn't formulate a proper response at the moment.";

      return NextResponse.json({ text: aiResponse });
    } catch (error) {
      console.error("OpenRouter failed, using local fallback response:", error);
      const localResponse = buildLocalResponse(lastUserMessage, businessData);
      return NextResponse.json({ text: localResponse });
    }
  } catch (error) {
    console.error("Error encountered in Chat Route:", error);

    const fallbackMessage = `Hi! I’m HybrixAI’s assistant. I can help with our chatbot, voice agents, appointment booking, pricing, and industries we serve. For the fastest answer, you can also reach us at hybrixai@gmail.com.`;

    // Return a friendly fallback response as a normal JSON payload so the UI can display it.
    return NextResponse.json({ text: fallbackMessage });
  }
}