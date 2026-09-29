import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Explicit route for Resume PDF with inline viewing headers
app.get(['/Logeshwaran_M.pdf', '/logeshwaran_m.pdf', '/resume.pdf'], (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="logeshwaran_m.pdf"');
  res.sendFile(path.join(__dirname, 'logeshwaran_m.pdf'));
});

// Explicit route for CSS to handle any case
app.get(['/Style.css', '/style.css'], (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'));
});

// Serve static files from the root directory
app.use(express.static(__dirname));

// Fallback to index.html for any navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
