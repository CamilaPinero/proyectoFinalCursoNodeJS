import router from "./routes/publication-routes.js";
import commentRouter from "./routes/comments-routes.js";
import userRouter from "./routes/user-routes.js";

import express from "express";
import connect from "./index.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/publications", router);
app.use("/", commentRouter);
app.use("/", userRouter);

app.get("/", function (req, res) {
	res.json({ msg: "CORS-enabled" });
});

connect();
app.listen(3000, () => console.log("Escuchando en puerto 3000"));
