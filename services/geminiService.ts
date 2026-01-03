
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askAssistant(question: string) {
  try {
    // Generate content using the recommended model and configuration
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    // Directly access the .text property of GenerateContentResponse
    return response.text || "Lo siento, tuve un problema procesando tu solicitud.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocurrió un error al conectar con el asistente. Por favor, intenta de nuevo.";
  }
}
