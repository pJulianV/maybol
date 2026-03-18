// Endpoint /api/ai-chat — Hugging Face Inference API
// Variables requeridas en Render:
//   HF_TOKEN → token tipo "Read" de huggingface.co/settings/tokens
//   HF_MODEL → mistralai/Mistral-7B-Instruct-v0.3

const SYSTEM_PROMPT =
  'Eres el asistente virtual oficial de Meybol (todas sus marcas). ' +
  'Responde únicamente con información breve, concreta y real sobre los productos ' +
  '(café, chocolate y derivados), la tienda, envíos, pagos y contactos. ' +
  'No inventes datos ni respondas sobre temas externos. ' +
  'Si no tienes información, responde con honestidad y ofrece ayuda. ' +
  'Mantén un tono profesional y directo. Sé breve. ' +
  'Contacto oficial: email: info@meybol.com, teléfono: +51 969 406 930.';

module.exports = async function aiChatHandler(req, res) {
  try {
    const { message, prompt, history } = req.body || {};
    const userMessage = message || prompt;

    if (!userMessage) {
      return res.status(400).json({ error: 'Falta el campo "message" o "prompt".' });
    }

    const HF_TOKEN = process.env.HF_TOKEN;
    const HF_MODEL = process.env.HF_MODEL || 'mistralai/Mistral-7B-Instruct-v0.3';

    if (!HF_TOKEN) {
      return res.status(500).json({ error: 'HF_TOKEN no configurado.' });
    }

    // Construir mensajes en formato chat
    const messages = [{ role: 'system', content: SYSTEM_PROMPT }];

    if (Array.isArray(history)) {
      for (const turn of history) {
        if (turn.role === 'user' || turn.role === 'assistant') {
          messages.push({ role: turn.role, content: turn.content });
        }
      }
    }
    messages.push({ role: 'user', content: userMessage });

    // Llamada al router de HF (OpenAI-compatible)
    const hfRes = await fetch(
      `https://router.huggingface.co/hf-inference/models/${HF_MODEL}/v1/chat/completions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: HF_MODEL,
          messages,
          max_tokens: 300,
          temperature: 0.7,
          stream: false,
        }),
      }
    );

    const rawText = await hfRes.text();

    if (!hfRes.ok) {
      console.error('HF error status:', hfRes.status, rawText);
      return res.status(502).json({
        error: 'Error al contactar Hugging Face.',
        status: hfRes.status,
        detail: rawText,
      });
    }

    let data;
    try {
      data = JSON.parse(rawText);
    } catch {
      return res.status(502).json({ error: 'Respuesta inválida de HF.', detail: rawText });
    }

    const reply =
      data?.choices?.[0]?.message?.content ||
      'Lo siento, no pude generar una respuesta.';

    return res.json({ reply: reply.trim() });

  } catch (err) {
    console.error('ai-chat error:', err);
    return res.status(500).json({ error: 'Error interno del servidor.', detail: err.message });
  }
};
