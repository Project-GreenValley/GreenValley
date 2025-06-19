import { Request, Response, NextFunction } from 'express';
import express, { ErrorRequestHandler } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authController from './controllers/authController.ts';
import 'dotenv/config';

const app  = express();

// parsing of JSON requests
app.use(express.json());
// for URL encoded payloads
app.use(express.urlencoded({ extended: true }));
// cookie parsing (if we use them, TBD)
app.use(cookieParser());
// enable cors (since Next.js and Express will have different origins). in future, add a whitelist of approved origins/URLs
app.use(cors({ origin: true, credentials: true }));


// custom error interface (e.g., for global error handler)
interface CustomError extends Error {
    log?: string;
    status?: number;
    message: string; 
}

// Routes to be defined below, if Express is used...need to decide how to proceed w/ team
// Server/backend isn't like a traditional Node/Express server
// With Next.js, you can write backend logic & it lives build api layer (folder) within your app file (see inside the src folder)
// Next.js does file-based routing --- file placement in specific folders determines your routes
// e.g., in the /app/api folder, files become serverless functions. file becomes an endpoint
// API design --- https://nextjs.org/blog/building-apis-with-nextjs#1-getting-started


// auth related routes
app.post('/login', authController.login, (req: Request, res: Response) => {
    res.status(200).json('Testing /login response---success');
});

app.post('/signup', authController.signup, (req: Request, res: Response) => {
    res.status(200).json('Testing /signup response---success');
});


// unknown route handler
app.use('*', (req: Request, res: Response) => {
    res.status(404).json('404 error---page not found');
});

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

const PORT = process.env.PORT || 3001;

// starts Express server
app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}...`);
})
