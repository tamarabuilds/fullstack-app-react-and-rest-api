'use strict';

// Library to help parse the user's credentials from the Authorization header
const auth = require('basic-auth');
const bcrypt = require('bcryptjs');
const { User } = require('../models');


/**
 * Middleware to authenticate the request using Basic Authentication.
 * This exports the middleware function to other modules can import it
 * 
 */
exports.authenticateUser = async (req, res, next) => {
    // store the message to display
    let message;

    // Parse the user's credentials from the Authorization header
    // Credentials should be set to an object with the user's key and secret
    const credentials = auth(req);

    // If the user's credentials are available...
        // Attempt to retrieve the user from the database by their username
        // e.g. user's "key" from Authorization header
    if (credentials) {
        // Using Sequelize's findOne(), find a user account where email = credential's username property
        // email is the unique property of the user model
        const user = await User.findOne({ where: { emailAddress: credentials.name }});

        // If a user was successfully retreived from the database...
            // User the bcryptjs npm package to compare the user' password
            // (from the Authorization header) to the user's password in the DB
        if (user) {
            // internally, compareSync() will hash the user's pw before comparing it to the stored hash
            const authenticated = bcrypt
                .compareSync(credentials.pass, user.password);

            // If the passwords match...
                // Store the received user object on the request object
                // allowing any middleware functions that follow this middleware
                // to have access to the user's information
            if (authenticated) {
                console.log(`Authentication successful for user email: ${user.emailAddress}`);

                // Store the user on the Request object
                // req.currentUser means we're adding a property named currentUser
                // to the Request object and setting it to the authenticated user
                req.currentUser = user;
            } else {
                message = `Authentication failure for user email: ${user.emailAddress}`;
            }
        } else {
            message = `User not found with email: ${credentials.name}`;
        }
     } else {
        message = `Auth header not found`;
     }

    // If user authentication failed...
        // Return a response with a 401 Unauthorization HTTP status code
        // Or if a user authentication succeeded...
            // Call the next() method
    if (message) {
        console.warn(message);
        // Generic message is intentionally vague to NOT help potential hackers
        res.status(401).json({ message: 'Access Denied' });
    } else {
        next();
    }
};