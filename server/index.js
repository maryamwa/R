import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import productroute from './routes/product.js';
import striperoute from './routes/stripeapi.js';
import orderRoute from './routes/order.js';
import cartRoute from './routes/cart.js';
import searchRoute from './routes/search.js';
import emailRoute from './routes/sendgrid.js';

dotenv.config({ path: './config.env' });

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/products', productroute);
app.use('/payments', striperoute);
app.use('/search', searchRoute);
app.use('/notifications', emailRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port : ${process.env.PORT}`)
);

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {});
  console.log(`mongo connected host : ${conn.connection.host}`);
};

connectDB();

