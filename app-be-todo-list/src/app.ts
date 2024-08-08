import express, { NextFunction, Request, Response, Router } from 'express'
import cors from 'cors';
import { HttpException } from './utils/http-exception';
import { StatusCodes } from 'http-status-codes';
import dotenv from 'dotenv';
import todoRouter from './routes/todos.route';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const CONTEXT_PATH = process.env.CONTEXT_PATH || '/api';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.use(CONTEXT_PATH, todoRouter);

app.use((_req, _res, next) => {
    const error = new HttpException(StatusCodes.NOT_FOUND, 'Not Found');
    next(error);
});

//error Handler
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
    console.log(new Date(), `(path: [${req.method}]${req.path})`, `[Log]: ${err.details || err.message}`);
    res.status(err.status || err.statusCode || 500).send({ message: err.details || err.message });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});