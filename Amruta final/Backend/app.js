import './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from "./routes/userRoutes.js";


dotenv.config();
const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use("/user", userRoutes);

//const PORT = process.env.PORT || ;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
