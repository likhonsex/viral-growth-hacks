// server/index.js
const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'landing')));

const PORT = process.env.PORT || 3000;
const ASSETS_DIR = path.join(__dirname, '..', 'assets');

// In-memory token store: token -> {file, expiresAt, used}
const tokens = new Map();

// Helper: generate one-time token
function genToken() {
  return crypto.randomBytes(18).toString('hex');
}

// POST /api/issue-download
// body: { transaction: {...}, tier: 'basic'|'full' }
app.post('/api/issue-download', (req, res) => {
  const { transaction, tier } = req.body || {};
  // Basic validation
  if (!transaction) {
    // still issue token for dev testing (if you want) OR reject.
    // We'll issue token anyway to allow manual testing.
  }
  // decide file based on tier
  const file = tier === 'full' ? 'toolkit-full.zip' : 'toolkit-basic.zip';
  const token = genToken();
  const expiresAt = Date.now() + 1000 * 60 * 60 * 24; // 24 hours
  tokens.set(token, { file, expiresAt, used: false });
  // Respond with token and download URL (server will handle GET /api/download)
  res.json({ ok: true, token, url: `/success.html?token=${encodeURIComponent(token)}` });
});

// GET /api/download?token=...
// returns zip file, single-use
app.get('/api/download', (req, res) => {
  const token = req.query.token;
  if (!token || !tokens.has(token)) return res.status(400).json({ ok: false, msg: 'Invalid token' });
  const meta = tokens.get(token);
  if (meta.used) return res.status(410).json({ ok: false, msg: 'Token already used' });
  if (Date.now() > meta.expiresAt) {
    tokens.delete(token);
    return res.status(410).json({ ok: false, msg: 'Token expired' });
  }
  const filePath = path.join(ASSETS_DIR, meta.file);
  if (!fs.existsSync(filePath)) return res.status(500).json({ ok: false, msg: 'File missing' });
  // mark used
  meta.used = true;
  // stream file
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', `attachment; filename="${meta.file}"`);
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
});

// Optional: cleanup expired tokens periodically
setInterval(() => {
  const now = Date.now();
  for (const [tk, m] of tokens) if (m.expiresAt < now) tokens.delete(tk);
}, 1000 * 60 * 30);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
