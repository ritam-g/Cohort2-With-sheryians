import { config } from 'dotenv'
import express from 'express'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

config()
const app = express()
app.use(express.json())
app.use(passport.initialize())
const port = 3000


/*
===========================================================
🧭 GOOGLE AUTH FLOW (MENTAL MODEL)
===========================================================

   [ USER CLICK ]
        |
        v
   GET /auth/google
        |
        v
   Passport redirects to Google
        |
        v
   🟢 Google Login Screen
        |
        v
   User selects account + allows permission
        |
        v
   Google redirects back →
   /auth/google/callback
        |
        v
   Passport verifies user
        |
        v
   req.user populated
        |
        v
   Your backend logic (DB / JWT / Response)

===========================================================
💡 WHY THIS FLOW?
- We NEVER handle password
- Google handles authentication
- We only receive verified user data
===========================================================
*/


// ===========================================================
// 🔐 STEP 1: CONFIGURE GOOGLE STRATEGY
// ===========================================================

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,       // 🔑 Provided by Google Cloud
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, // 🔐 Secret key
    callbackURL: '/auth/google/callback',          // 🔁 Where Google sends user back
}, (_, __, profile, done) => {

    /*
    ===========================================================
    🧠 WHAT IS HAPPENING HERE?
    ===========================================================

    Google sends us:
    - profile.id
    - profile.displayName
    - profile.emails

    Example:
    profile = {
      id: "123456",
      displayName: "Ritam",
      emails: [{ value: "ritam@gmail.com" }]
    }

    ===========================================================
    💡 REAL WORLD (IMPORTANT)
    ===========================================================

    Here you SHOULD:
    1. Check if user exists in DB
    2. If not → create user
    3. Return user object

    ===========================================================
    FLOW:
    Google → Passport → This function → done()
    ===========================================================
    */

    return done(null, profile) // attaches user to req.user
}));



// ===========================================================
// 🚀 STEP 2: START AUTH FLOW
// ===========================================================

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
)

/*
===========================================================
🧭 WHAT HAPPENS HERE?
===========================================================

User hits:
👉 /auth/google

Passport does:
👉 Redirect → Google login page

Scope means:
- profile → name, picture
- email → user email

===========================================================
FLOW:
Frontend → /auth/google → Google Login Page
===========================================================
*/



// ===========================================================
// 🔁 STEP 3: CALLBACK AFTER GOOGLE LOGIN
// ===========================================================

app.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    (req, res) => {

        /*
        ===========================================================
        🧠 FINAL STEP FLOW
        ===========================================================

        Google → redirect → this route
        Passport → verifies token
        Then:
        ✔ req.user is available

        ===========================================================
        req.user contains:
        - id
        - name
        - email
        ===========================================================
        */

        console.log("User authenticated:")
        console.log(req.user)   // 👈 FINAL USER DATA
        console.log(req.query)  // 👈 contains extra info from Google

        /*
        ===========================================================
        🚀 WHAT YOU SHOULD DO HERE (IMPORTANT)
        ===========================================================

        Instead of res.send:

        1. Create JWT token
        2. Store user in DB
        3. Redirect to frontend dashboard

        Example:
        res.redirect(`http://localhost:5173/dashboard?token=XYZ`)

        ===========================================================
        */

        res.send("Login successful")
    }
)



// ===========================================================
// 🟢 SERVER START
// ===========================================================

app.listen(3000, () => {
    console.log(`Example app listening on port ${port}`)
})

/*
===========================================================
🏁 FINAL SUMMARY (1 MIN REVISION)
===========================================================

1. User clicks login
2. Redirect to Google
3. User logs in
4. Google sends back to callback
5. Passport verifies
6. req.user is filled
7. You handle login (JWT / DB / redirect)

===========================================================
🔥 KEY TAKEAWAY

Passport = Middleman
Google = Auth Provider
You = Handle user after login

===========================================================
*/