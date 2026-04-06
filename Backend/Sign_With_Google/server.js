import { config } from 'dotenv'
import express from 'express'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

config()
const app = express()
app.use(express.json())
app.use(passport.initialize())
const port=3000

// Configure Passport to use Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
}, (_, __, profile, done) => {
    // Here, you would typically find or create a user in your database
    // For this example, we'll just return the profile
    return done(null, profile);
}));

// Route to initiate Google OAuth flow
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route that Google will redirect to after authentication
app.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {
        console.log("User authenticated:");
        console.log(req.user);
        console.log(req.query);
        
        res.send("Login successful");
    }
);
app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})