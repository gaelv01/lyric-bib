// Initialize Express
import express from 'express';
const app = express();

// Initialize CORS
import cors from 'cors';
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Middlewares
app.use(express.json()); // for parsing application/json

// Routes

// Use of Routes

// App export
export default app;