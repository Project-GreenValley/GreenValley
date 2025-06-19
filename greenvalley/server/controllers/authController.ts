// need to import or require pool for DB
// import pool from ???

import { Request, Response, NextFunction } from "express";

const authController = {
    login: async (req: Request, res: Response, next: NextFunction) => {
    
    const { username, password } = req.body;
    console.log(`In authController.login:`, username, password);

    try {
        // error handling for missing username or password
        if (!username || !password) {
            return next({
                log: 'In authController.login, missing username or password',
                status: 400,
                message: { err: 'Failed to log in, broseph.' }
            });
        }

        // query string for checking DB for username and password
        // const queryString: string = `SELECT * FROM users WHERE username = $1;`;
        
        // const loginResult = await pool.query(queryString, [username]);
        // const user = loginResult.rows[0];

        // NEXT STEPS: 
        // if using bcrypt, grab hashed password from loginResult
        // then, add some logic here somewhere to get hashed passwords that are associated with user and compare to user-supplied password here in authController (use bcrypt.compare() method). Good practice is not to include passwords into the SQL query, it can't work with/handle them.

        res.locals.loggedInUser = { username, password }
        console.log(`Testing login middleware: ${res.locals.loggedInUser}`);
        return next();

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            return next({
                log: 'Error in authController.login',
                status: 500,
                message: { err: 'An error occurred' }
            });
        }
    },


    signup: async (req: Request, res: Response, next: NextFunction) => {
        
    const { newUsername, newPassword } = req.body;
    console.log(`In authController.signup:`, newUsername, newPassword);

    // error handling for missing username or password
    if (!newUsername || !newPassword) {
        return next({
            log: 'In authController.signup, missing username or password',
            status: 400,
            message: { err: 'Failed to sign up, fella.' }
        })
    }
    // // create query string for DB
    // const queryString = `SELECT * FROM users WHERE username = $1 AND password = $2`;
    // const values = [username, password]

    try {
        // query DB for given username and password, see
        // const results = await pool.query(queryString, values);
        // console.log(results.rows);

        // if (results.rows.length === 0) {
            // const insertText = `INSERT INTO users VALUES $1, $2;`;

            // // verify that new user credentials were stored
            // const signupResult = await pool.query(insertText, values);
            // console.log('Inserted results for newly created user:', signupResult.rows[0]);

            // NEXT STEPS: 
            // if using bcrypt, hash new passwords and store in database
            // also if using bcrypt, first process the user-submitted password (see above notes RE: bcrypt.compare() method).
                
            res.locals.signedupUser = { newUsername, newPassword }
            console.log(`Testing login middleware: ${res.locals.signedupUser}`);
        // }
        return next();
        
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            return next({
                log: 'Error in authController.signup',
                status: 500,
                message: { err: 'An error occurred' }
            });
        }
    }

};

export default authController