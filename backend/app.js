import router from "./routes/publication-routes.js";
import commentRouter from "./routes/comments-routes.js";
import express from "express";
import connect from "./index.js";

const app = express();
app.use(express.json());
app.use("/publications", router);
app.use("/comment", commentRouter);

connect();
app.listen(3000, () => console.log("Escuchando en puerto 3000"));
