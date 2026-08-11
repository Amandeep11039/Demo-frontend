export interface AskStylistRequest {
  prompt: string;
  occasion?: string;
  city?: string;
  temperature?: number;
}

export interface AskStylistResponse {
  text: string;
  model: string;
  timestamp: string;
}

const API_BASE_URL = "http://localhost:8000/api";

/**
 * Sends a question directly to the Gemini AI Stylist endpoint
 */
export async function askGeminiStylist(
  request: AskStylistRequest,
): Promise<AskStylistResponse> { 
  try {
    const response = await fetch(`${API_BASE_URL}/gemini/ask-stylist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error connecting to Gemini API backend:", error);
    throw error;
  }
}
