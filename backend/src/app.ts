import express ,{type Express}from "express";
import cors from "cors"
import auth from "./modules/auth/auth.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app:Express = express()


app.use(cors({
    origin:" http://localhost:5173/",
    credentials:true
}))


app.use(express.json())

app.use("/auth",auth)

app.use(errorHandler)

export default app;
