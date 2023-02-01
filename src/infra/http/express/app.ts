import "express-async-errors";
import express from "express";
import { routes } from "./routes";
import { errorHandlerMiddleware } from "@/infra/http/errors";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandlerMiddleware);

export { app };
