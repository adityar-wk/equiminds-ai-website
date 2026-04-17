/**
 * gemini.ts — Frontend helper for the Gemini proxy.
 *
 * All requests go to /api/chat or /api/generate on our own server.
 * The real Gemini API key is stored server-side ONLY (server/.env).
 * It is never included in this bundle.
 */

export interface ChatMessage {
  role: 'user' | 'model';
  parts: [{ text: string }];
}

export interface ChatOptions {
  model?: string;
  history?: ChatMessage[];
}

/**
 * Send a chat message through the backend proxy.
 *
 * @param message  The user's message text.
 * @param options  Optional model name and conversation history.
 * @returns        The model's reply as a string.
 */
export async function sendChatMessage(
  message: string,
  options: ChatOptions = {}
): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      history: options.history ?? [],
      model: options.model,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? `Server error ${response.status}`);
  }

  const data = await response.json() as { reply: string };
  return data.reply;
}

/**
 * Single-turn content generation through the backend proxy.
 *
 * @param prompt  The prompt text.
 * @param model   Optional model name.
 * @returns       Generated text string.
 */
export async function generateContent(
  prompt: string,
  model?: string
): Promise<string> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, model }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? `Server error ${response.status}`);
  }

  const data = await response.json() as { text: string };
  return data.text;
}
