// Simple Node.js + Express server for Maybol.
// This allows /api/ai-chat to work on platforms like Render or Heroku.

const express = require('express');
const path = require('path');
const aiChatHandler = require('./api/ai-chat');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API endpoints
app.post('/api/ai-chat', aiChatHandler);

// Serve static site files
app.use(express.static(path.join(__dirname, '/')));

// Fallback to index.html for any non-API route (useful for SPA-like navigation)
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Maybol server listening on port ${PORT}`);
  console.log(`🌐 AI endpoint: http://localhost:${PORT}/api/ai-chat`);
});
