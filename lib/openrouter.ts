import { OpenRouter } from "@openrouter/sdk";
console.log("API KEY EXISTS:", !!process.env.OPENROUTER_API_KEY);
export const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY!,
});