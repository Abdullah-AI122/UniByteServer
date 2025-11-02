// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

let files = [];

app.get('/', (req, res) => {
  res.send('Welcome to unibyte Server');
});


const FrontEndPath = path.join("D:/UniByteServer/FrontEnd/dist");
app.use(express.static(FrontEndPath));

app.get("/home", (req, res) => {
  res.sendFile(path.join(FrontEndPath, "index.html"));
});

app.post('/upload', (req, res) => {
  files.push(req.body);
  res.json({ message: "File Uploaded" });
});

app.get('/api/admin', (req, res) => {
  res.sendFile(path.join(FrontEndPath, "index.html"));
});

app.post("/api/admin/login", (req, res) => {
  const { text , password } = req.body;

  if (text === "abc" && password === "123") {
    return res.json({ success: true, message: "success" });
  }

  return res.json({ success: false, message: "error" });
});


app.listen(PORT, () => {
  console.log(`✅ Unibyte Server: http://localhost:${PORT}`);
});
