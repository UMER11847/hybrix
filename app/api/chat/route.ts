import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

// Initialize Gemini client if API key is present
const apiKey = process.env.GEMINI_API_KEY
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null

// Simple rule-based chatbot responses as a fallback
function getFallbackResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase()

  if (msg.includes('price') || msg.includes('pricing') || msg.includes('cost') || msg.includes('plan') || msg.includes('package')) {
    return `We offer several tailored packages:
• **Starter ($249/mo):** AI chatbot, lead capture forms, and basic CRM integrations. Best for local clinics and small businesses.
• **Growth ($599/mo):** AI chatbot + Lead generation automation and social media posting.
• **Pro ($1,499/mo):** Full AI employee system including AI call agents, email campaigns, and custom workflows.
• **Enterprise ($2,499/mo):** Custom integrations, dedicated manager, and enterprise-grade automation.

Would you like to book a demo to find which plan fits your business best?`
  }

  if (msg.includes('book') || msg.includes('appointment') || msg.includes('schedule') || msg.includes('demo') || msg.includes('consultation')) {
    return `I can definitely help you with that! You can click the "Book Free Demo" button on the screen to schedule a direct 30-minute consultation with our team. 

Alternatively, drop your contact details in the request form and we'll reach out to schedule a convenient time for you.`
  }

  if (msg.includes('service') || msg.includes('chatbot') || msg.includes('what do you do') || msg.includes('call') || msg.includes('phone') || msg.includes('help')) {
    return `HybrixAI helps businesses automate customer communication and operations. Our main services include:
1. **AI Call Agents:** Natural, warm-sounding voice assistants that answer client calls 24/7, book appointments, and transfer hot leads.
2. **AI Chatbots:** Intelligent web widgets for 24/7 client support and qualification.
3. **AI Lead Generation:** Automated forms and workflows to capture, nurture, and score leads.
4. **Social Media & Content Automation:** Generative tools to schedule, publish, and scale marketing content automatically.

Is there a specific area you are looking to automate today?`
  }

  if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
    return `Hello! How can I help you today? Ask me about our AI services, pricing packages, how setup works, or how to book a demo.`
  }

  return `Thanks for your message! I'm the HybrixAI receptionist assistant. 

Our AI call assistants and chatbots are designed to answer customer queries instantly, book appointments, and capture leads 24/7 so your team never misses another opportunity. 

Would you like to learn more about how we can set this up for your business within 48 hours, or would you like to schedule a free demo call?`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const messages = body.messages || []

    if (messages.length === 0) {
      return NextResponse.json({ error: 'No messages provided' }, { status: 400 })
    }

    const lastUserMessage = messages[messages.length - 1]?.text || ''

    // If Gemini is configured, use it
    if (genAI) {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
      
      // Construct prompt with context
      const systemContext = `You are a helpful, professional, and friendly AI representative for HybrixAI. 
HybrixAI builds AI call assistants and chatbots for service businesses (clinics, realtors, law firms, salons, car dealerships).
Main features: 24/7 availability, natural-sounding voices, CRM integration, appointment booking, lead generation, 48-hour setup.
Pricing: Starter ($249/mo), Growth ($599/mo), Pro ($1,499/mo), Enterprise ($2,499/mo).

Keep your responses conversational, concise, professional, and focused on helping the business owner understand how AI automation can save them time and capture more clients. Encourage them to book a free demo.`
      
      const prompt = `${systemContext}\n\nUser: ${lastUserMessage}\nAI:`
      const result = await model.generateContent(prompt)
      const response = await result.response
      const responseText = response.text()

      return NextResponse.json({ text: responseText })
    }

    // Fallback if no Gemini API key is configured
    // Simulate network delay for a more natural feel
    await new Promise((resolve) => setTimeout(resolve, 800))
    const reply = getFallbackResponse(lastUserMessage)

    return NextResponse.json({ text: reply })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    )
  }
}
