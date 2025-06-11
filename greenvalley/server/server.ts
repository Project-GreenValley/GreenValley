import { Request, Response, NextFunction } from 'express';
import express, { ErrorRequestHandler } from 'express';
import cookieParser from 'cookie-parser';
// import authController from './controllers/authController';
import 'dotenv/config';

const app  = express();
const PORT = 3000;

// allow parsing of JSON requests
app.use(express.json());
// for URL encoded payloads
app.use(express.urlencoded({ extended: true }));
// cookie parsing (if we use them, TBD)
app.use(cookieParser());

// routes to be defined below, if Express is used...need to decide how to proceed w/ team
// server/backend isn't like a traditional Node/Express server
// with Next.js, you can write backend logic & it lives build api layer (folder) within your app file (see inside the src folder)
// Next.js does file-based routing --- file placement in specific folders determines your routes
// e.g., in the /app/api folder, files become serverless functions. file becomes an endpoint
// API design --- https://nextjs.org/blog/building-apis-with-nextjs#1-getting-started


// Auth Related Routes
// app.post('/login', authController.login, (req: Request, res: Response) => {
//     res.status(200).json(`Testing login route`);
// });


// unknown route handler
//


interface CustomError extends Error {
    status?: number;
    log?: string;
    message: string; 
}

// global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(((err: CustomError, req: Request, res: Response, next: NextFunction) => {
    const defaultError = {
        log: 'Express error handler caught an error in middleware',
        status: 500,
        message: { err: 'An error occurred' }
    };

    const error = {
        ...defaultError,
        ...err,
    };

    console.error(error);
    return res.status(error.status).json(error.message);
}) as unknown as ErrorRequestHandler);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})