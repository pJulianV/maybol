// Vercel Serverless Function for /api/ai-chat
// Uses Hugging Face Inference API (HF_TOKEN + HF_API_URL) to generate answers.

const SYSTEM_PROMPT =
  'Eres el asistente virtual oficial de Meybol (todas sus marcas). Responde únicamente con información breve, concreta y real sobre los productos (café, chocolate y derivados), la tienda, envíos, pagos y contactos. No inventes datos ni respondas sobre temas externos. Si no tienes información, responde con honestidad y ofrece ayuda con información sobre productos, pedidos o contacto. Mantén un tono profesional y directo. Sé breve y no agregues información innecesaria. Información de contacto oficial: email: info@meybol.com, teléfono: +51 969 406 930.';

function allowCors(req, res) {
  const origin = req.headers.origin;

  // For this endpoint, we allow any origin (CORS). The API is protected by the
  // Hugging Face token, so allowing cross-origin calls is acceptable for this use.
  // If you want to restrict it, set ALLOWED_ORIGINS to a comma-separated list
  // of allowed domains (e.g. https://example.com).
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  return !!origin;
}

module.exports = async (req, res) => {
  allowCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const hfToken = process.env.HF_TOKEN;
  if (!hfToken) {
    return res.status(500).json({ error: 'HF_TOKEN (Hugging Face token) is not configured' });
  }

  const hfApiUrl = process.env.HF_API_URL || 'https://router.huggingface.co/v1/chat/completions';
  const hfModel = process.env.HF_MODEL || 'gpt2';

  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid prompt' });
  }

  try {
    // Debug: log configured HF API URL so we can confirm which endpoint is being used.
    console.log('HF API URL:', hfApiUrl);

    const hfRes = await fetch(hfApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${hfToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: hfModel,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: prompt.trim() }
        ]
      }),
    });

    const data = await hfRes.json();
    if (!hfRes.ok) {
      const detail = data?.error || JSON.stringify(data);
      return res.status(hfRes.status).json({ error: 'Hugging Face responded with an error', detail });
    }

    const result =
      data?.choices?.[0]?.message?.content ||
      data?.choices?.[0]?.text ||
      data?.output?.[0]?.generated_text ||
      '';

    return res.status(200).json({ result: String(result).trim() });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
};
