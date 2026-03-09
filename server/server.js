import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); 


app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: "ok", 
    message: "Servidor rodando perfeitamente!" 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Log: Servidor rodando na porta ${PORT}`);
});
