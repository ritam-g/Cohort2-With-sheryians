import express from "express";
import { createUser } from "./controller/user.controller.js";

const app = express();

app.use(express.json());

app.post("/users",  createUser );

export default app;