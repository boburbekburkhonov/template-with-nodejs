import express from 'express'
import ejs from 'ejs'
import dotenv from "dotenv";
dotenv.config();
import expressFileUpload from "express-fileupload";
import path from "path";
import getPortFolioRoutes from "./routes/getPortFolio.routes.js";
import { errorHandlerMiddleware } from "./middleware/errorHandler.js";
import routes from "./routes/routes.js";
import { log } from "console";

const app = express();

const PORT = process.env.PORT || 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use(expressFileUpload());

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "view"));
app.use("/assets", express.static(path.join(process.cwd(), "src", "assets")));
app.use("/uploads", express.static(path.join(process.cwd(), "src", "uploads")));

app.use(routes);

app.use(errorHandlerMiddleware);

app.listen(PORT, console.log(PORT));
