// Endpoint /api/ai-chat — Hugging Face Inference API

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
    const HF_MODEL = process.env.HF_MODEL || 'HuggingFaceH4/zephyr-7b-beta';

    if (!HF_TOKEN) {
      return res.status(500).json({ error: 'HF_TOKEN no configurado en el servidor.' });
    }

    const messages = [{ role: 'system', content: SYSTEM_PROMPT }];

    if (Array.isArray(history)) {
      for (const turn of history) {
        if (turn.role === 'user' || turn.role === 'assistant') {
          messages.push({ role: turn.role, content: turn.content });
        }
      }
    }

    messages.push({ role: 'user', content: userMessage });

    const hfRes = await fetch(
      `https://router.huggingface.co/hf-inference/models/${HF_MODEL}/v1/chat/completions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: HF_MODEL,
          messages,
          max_tokens: 300,
          temperature: 0.7,
        }),
      }
    );

    if (!hfRes.ok) {
      const errText = await hfRes.text();
      console.error('HF error:', errText);
      return res.status(502).json({ error: 'Error al contactar Hugging Face.', detail: errText });
    }

    const data = await hfRes.json();
    const reply = data?.choices?.[0]?.message?.content || 'Lo siento, no pude generar una respuesta.';

    return res.json({ reply: reply.trim() });
  } catch (err) {
    console.error('ai-chat error:', err);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};
