export async function askGemini(prompt: string): Promise<string> {
  // Lemos a chave da API a partir das variáveis de ambiente (Vite)
  const apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY não está definida nas variáveis de ambiente.");
  }

  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";
  
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": apiKey
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Erro na API Gemini: ${response.status} - ${errorBody}`);
  }

  const data = await response.json();
  
  // Retornamos apenas o texto da resposta
  return data.candidates[0].content.parts[0].text;
}
