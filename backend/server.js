import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import itemRoutes from './routes/itemRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecoexchange';

mongoose.connect(MONGO_URI)
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/items', itemRoutes);

app.get('/', (req,res) => res.send('EcoExchange API is running'));

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
