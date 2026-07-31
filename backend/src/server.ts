import app from "./app.js";
import { env } from "./config/env.js";
import http, { Server } from "node:http"

const server = http.createServer(app);
const PORT = env.PORT

server.listen(PORT ,()=>{
console.log("Sever is runnig on",PORT);

})