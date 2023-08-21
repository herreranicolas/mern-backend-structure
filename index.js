import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import "dotenv/config";
import "./src/database/dbConnection";
import usersRouter from "./src/routes/users.routes";
import postsRouter from "./src/routes/posts.routes";

const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

// Middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/public")));

// Routes

app.use("/api-backend", usersRouter);
app.use("/api-backend", postsRouter);
