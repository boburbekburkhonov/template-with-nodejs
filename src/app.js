import express from 'express'
import ejs from 'ejs'
import path from 'path'
import getPortFolioRoutes from './routes/getPortFolio.routes.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.js';

const app = express();

const PORT = process.env.PORT || 9090

app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'src', 'view'));
app.use('/assets', express.static(path.join(process.cwd(), 'src', 'assets')));

app.use(getPortFolioRoutes)

app.use(errorHandlerMiddleware)

app.listen(PORT, console.log(PORT))
