const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID = "190280709369-ov2fqa67qosi4e27ac35f1atfk7513pf.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
passport.use(
    new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  function (accessToken, refreshToken, profile, done) {
    done(null,profile );
  }
  )
);
passport.serializeUser((user,done)=>{
    done(null,user);
});
passport.deserializeUser((user,done)=>{
    done(null,user);
});