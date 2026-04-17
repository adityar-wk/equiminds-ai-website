'use strict';

require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const { GoogleGenAI } = require('@google/genai');

// ─── Config ──────────────────────────────────────────────────────────────────

const PORT           = process.env.PORT || 3001;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';

if (!GEMINI_API_KEY) {
  console.error('[server] ERROR: GEMINI_API_KEY is not set. Copy server/.env.example → server/.env and fill it in.');
  process.exit(1);
}

const ai  = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const app = express();

// ─── Middleware ───────────────────────────────────────────────────────────────

app.use(cors({
  origin: ALLOWED_ORIGIN,
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json({ limit: '2mb' }));

// ─── Health check ─────────────────────────────────────────────────────────────

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// ─── POST /api/chat ───────────────────────────────────────────────────────────
//
//  Request body:
//    {
//      message : string,          // the user's latest message (required)
//      history?: [                // previous conversation turns (optional)
//        { role: 'user' | 'model', parts: [{ text: string }] }
//      ],
//      model?  : string           // e.g. "gemini-2.0-flash" (optional, has default)
//    }
//
//  Response:
//    { reply: string }
//
//  Error:
//    { error: string }
//
// ─────────────────────────────────────────────────────────────────────────────

app.post('/api/chat', async (req, res) => {
  const { message, history = [], model = 'gemini-2.0-flash' } = req.body || {};

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Request body must include a non-empty "message" string.' });
  }

  try {
    const chat = ai.chats.create({
      model,
      history,
      config: {
        systemInstruction:
          'You are EquiMinds AI assistant — helpful, concise, and focused on AI solutions for business.',
      },
    });

    const result = await chat.sendMessage({ message: message.trim() });
    const reply  = result.text ?? '';

    return res.json({ reply });
  } catch (err) {
    console.error('[/api/chat] Gemini error:', err?.message ?? err);
    return res.status(502).json({ error: 'Failed to get a response from Gemini. Please try again.' });
  }
});

// ─── POST /api/generate ───────────────────────────────────────────────────────
//
//  Single-turn generation (no history).
//  Request body: { prompt: string, model?: string }
//  Response:     { text: string }
//
// ─────────────────────────────────────────────────────────────────────────────

app.post('/api/generate', async (req, res) => {
  const { prompt, model = 'gemini-2.0-flash' } = req.body || {};

  if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
    return res.status(400).json({ error: 'Request body must include a non-empty "prompt" string.' });
  }

  try {
    const result = await ai.models.generateContent({
      model,
      contents: prompt.trim(),
    });

    return res.json({ text: result.text ?? '' });
  } catch (err) {
    console.error('[/api/generate] Gemini error:', err?.message ?? err);
    return res.status(502).json({ error: 'Failed to generate content. Please try again.' });
  }
});

// ─── Start ────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`[server] Gemini proxy running on port ${PORT}`);
  console.log(`[server] Accepting requests from: ${ALLOWED_ORIGIN}`);
});
