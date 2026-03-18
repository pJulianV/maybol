// Endpoint /api/ai-chat — Hugging Face Inference API
// Variables de entorno requeridas en Render:
//   HF_TOKEN   → tu token de Hugging Face
//   HF_MODEL   → e.g. meta-llama/Llama-2-7b-chat-hf

const SYSTEM_PROMPT =
  'Eres el asistente virtual oficial de Meybol (todas sus marcas). ' +
  'Responde únicamente con información breve, concreta y real sobre los productos ' +
  '(café, chocolate y derivados), la tienda, envíos, pagos y contactos. ' +
  'No inventes datos ni respondas sobre temas externos. ' +
  'Si no tienes información, responde con honestidad y ofrece ayuda con información ' +
  'sobre productos, pedidos o contacto. ' +
  'Mantén un tono profesional y directo. Sé breve y no agregues información innecesaria. ' +
  'Información de contacto oficial: email: info@meybol.com, teléfono: +51 969 406 930.';

module.exports = async function aiChatHandler(req, res) {
  try {
    const { message, prompt, history } = req.body || {};
    const userMessage = message || prompt;

    if (!userMessage) {
      return res.status(400).json({ error: 'Falta el campo "message" o "prompt".' });
    }

    const HF_TOKEN = process.env.HF_TOKEN;
    const HF_MODEL = process.env.HF_MODEL || 'meta-llama/Llama-2-7b-chat-hf';

    if (!HF_TOKEN) {
      return res.status(500).json({ error: 'HF_TOKEN no configurado en el servidor.' });
    }

    // Construir prompt formato Llama-2 chat
    let llmPrompt = `<s>[INST] <<SYS>>\n${SYSTEM_PROMPT}\n<</SYS>>\n\n`;

    // Agregar historial previo si existe
    if (Array.isArray(history)) {
      for (const turn of history) {
        if (turn.role === 'user') llmPrompt += `${turn.content} [/INST] `;
        else if (turn.role === 'assistant') llmPrompt += `${turn.content} </s><s>[INST] `;
      }
    }

    llmPrompt += `${userMessage} [/INST]`;

    const hfRes = await fetch(
      `https://api-inference.huggingface.co/models/${HF_MODEL}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: llmPrompt,
          parameters: {
            max_new_tokens: 300,
            temperature: 0.7,
            top_p: 0.9,
            do_sample: true,
            return_full_text: false,
          },
        }),
      }
    );

    if (!hfRes.ok) {
      const errText = await hfRes.text();
      console.error('HF error:', errText);
      return res.status(502).json({ error: 'Error al contactar Hugging Face.', detail: errText });
    }

    const data = await hfRes.json();

    // HF devuelve array con generated_text
    const reply =
      (Array.isArray(data) && data[0]?.generated_text) ||
      data?.generated_text ||
      'Lo siento, no pude generar una respuesta.';

    return res.json({ reply: reply.trim() });
  } catch (err) {
    console.error('ai-chat error:', err);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};
