require('dotenv').config();
import express, { NextFunction, Request, Response } from 'express';
export const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {ErrorMiddleware} from './middleware/error'
//bodyParser
app.use(express.json({limit: "50mb"}));

//cookieparser

app.use(cookieParser());

//cors => cross origin resource sharing

app.use(cors({
    credentials: true,
    origin: process.env.ORIGIN
}));


//TESTIN api

app.get('/test', (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({
        success: true,
        message: 'API is working'
    });
});

//unknown route
app.all('*', (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({
        success: true,
        message: 'API is working'
    });
});
app.use(ErrorMiddleware);