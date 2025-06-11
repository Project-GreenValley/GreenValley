// // need to import or require pool for DB
// import pool from ???

const authController = {};

// authController.login = async (req, res, next) => {
    
//     const { username, password } = req.body;

//     try {
//         // error handling for missing username or password
//         if (!username || !password) {
//             return next({
//                 log: 'In authController.login, missing username or password',
//                 status: 400,
//                 message: {
//                     err: 'Failed to log in.'
//                 }
//             });
//         }

//         // query string for checking DB for username and password
//         // const queryString: string = `SELECT * FROM users WHERE username = $1;`;
        
//         // const loginResult = await pool.query(queryString, [username]);
//         // const user = loginResult.rows[0];

//         // NEXT STEPS: 
//         // if using bcrypt, grab hashed password from loginResult
//         // then, add some logic here somewhere to get hashed passwords that are associated with user and compare to user-supplied password here in authController (use bcrypt.compare() method). Good practice is not to include passwords into the SQL query, it can't work with/handle them.

        

//     } catch (err) {
//         return next({
//             log: 'Error in authController.login',
//             status: 500,
//             message: { err: 'An error occurred' }
//         });
//     }

// }

export default authController