import mongoose from 'mongoose';
import { DATABASE_URL } from './env';

export async function connectDb() {
  console.log('ds');
  await mongoose
    .connect(DATABASE_URL)
    .then(() => console.log('connected to database'));
}
