const handler = require('./api/ai-chat');

const req = {
  method: 'POST',
  headers: { origin: 'http://localhost:3000' },
  body: { prompt: 'Hola' }
};

let resStatus;
let resBody;
const res = {
  headers: {},
  setHeader(k, v) { this.headers[k] = v; },
  status(code) { resStatus = code; return this; },
  json(obj) { resBody = obj; console.log('STATUS', resStatus, 'BODY', JSON.stringify(obj, null, 2)); },
};

process.env.HF_TOKEN = 'test';
// Use the new Router endpoint (recommended) when testing locally.
process.env.HF_API_URL = 'https://router.huggingface.co/v1/chat/completions';
process.env.HF_MODEL = 'openai/gpt-oss-120b:fastest';

handler(req, res).catch((e) => { console.error('HANDLER ERROR', e); });
