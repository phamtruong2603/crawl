import express from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';

const authRoute = express.Router();

authRoute.get('/auth/login/success', (req, res) => {
    console.log("user : ", req.user)
    res.status(200).json({
        success: true,
        message: 'login'
    })
})

authRoute.get('/auth/login/failed', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'login failed!!!'
    })
})

authRoute.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
authRoute.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login/failed' }),
    (req, res) => {
        console.log(req.user)
        res.redirect('http://localhost:3000/about')
    }
);

authRoute.get('/auth/github', passport.authenticate('github', { scope: ['profile'] }));
authRoute.get('/auth/github/callback',
    passport.authenticate('github', {
        successRedirect: "http://localhost:3000/home",
        failureRedirect: '/login/failed'
    }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

authRoute.get('/auth/facebook', passport.authenticate('facebook', { scope: ['profile'] }));
authRoute.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: "http://localhost:3000/home",
        failureRedirect: '/login/failed'
    }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
);

export default authRoute