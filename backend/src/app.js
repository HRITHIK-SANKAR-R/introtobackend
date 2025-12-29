import express from "express"
import router from "./routes/user.routes.js";
const app = express(); //Create a express application by initiating
app.use(express.json());
import userRouter from "./routes/user.routes.js"
app.use("/api/v1/users",userRouter)

export default app;