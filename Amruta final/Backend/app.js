import './config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import './config/db.js';
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
//import nexusRoutes from "./routes/nexusRoutes.js";
// import iconRoutes from "./routes/iconRoutes.js";
//import inviteRoutes from"./routes/inviteRoutes.js";


dotenv.config();
const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use("/user", userRoutes);
//app.use('/api/nexus', nexusRoutes);
// app.use('/api/nexus/icons', iconRoutes);  // note: iconRoutes has GET '/' - becomes /api/nexus/icons/
//app.use('/api/invite', inviteRoutes);

//const PORT = process.env.PORT || ;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
