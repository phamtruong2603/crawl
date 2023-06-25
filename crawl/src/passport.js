
import passport from 'passport';
import ppGoogleOauth from 'passport-google-oauth20';
import ppGithubOauth from 'passport-github2';
import ppFacebookOauth from 'passport-facebook'
import jwt from 'jsonwebtoken';

import User from './models/user.js';
import config from './configs/config.js';

const GoogleStrategy = ppGoogleOauth.Strategy;
const GitHubStrategy = ppGithubOauth.Strategy
const FacebookStrategy = ppFacebookOauth.Strategy

const GOOGLE_CLIENT_ID = "668445809208-fq72h2t0qu344jaoa34rlbjdg7pt07o2.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "93e3c85ec18d75391430"
const GITHUB_CLIENT_SECRET = "f73280dfff723db7d1a9732116811dd38eecf80d"

const FACEBOOK_APP_ID = " 1307427909838025"
const FACEBOOK_APP_SECRET = "9709ea55c0e1e0f5896cae85d6cc915f"

const PassportConfig = () => {

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        done(null, user)
    })

    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/v1/auth/google/callback"
    },
        async (accessToken, refreshToken, profile, done) => {
            const email = profile.emails[0].value;
            const avatar = profile.photos[0].value
            const provider = profile.provider
            const user = await User.findOne({
                where: { account: email, provider }
            });
            const token = jwt.sign({ id: user.id }, config.secretKey, {
                expiresIn: '1h'
            });
            if (!user) {
                const newUser = await User.create({
                    account: email,
                    provider,
                    name: profile.displayName,
                    avatar,
                })
                done(null, { ...newUser, token })
            }
            done(null, { ...user, token })
        }
    ));

    passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/v1/auth/github/callback"
    },
        async (accessToken, refreshToken, profile, done) => {
            const avatar = profile.photos[0].value
            const provider = profile.provider

            const user = await User.findOne({
                where: { account: profile.id, provider }
            });
            if (!user) {
                const newUser = await User.create({
                    account: profile.id,
                    provider,
                    name: profile.username,
                    avatar,
                })
                done(null, newUser)
            }
            done(null, user)
        }
    ));

    passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/v1/auth/facebook/callback"
    },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    ));
}

export default PassportConfig
