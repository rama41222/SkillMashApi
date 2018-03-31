/*
 * Created by Rama41222 on 3/31/18 2:41 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 3/31/18 2:41 AM by  Rama41222
 */

import passport from 'passport'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
import FacebookStrategy from 'passport-facebook-token'
import User from '../modules/users/user.model'
import constants from '../config/constants'

// JWT Strategy
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
    secretOrKey: constants.JWT_SECRET,
}

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
    console.log(payload)
    try {
        // const uid = req.params.id
        //
        // if(uid !== payload._id) {
        //     return done(null, false)
        // }

        const user = await User.findById(payload._id)

        if (!user) {
            return done(null, false)
        }

        return done(null, user)
    } catch (error) {
        console.log(error.message)
        return done(error, false)
    }
})

//facebook Strategy

const fbOpts = {
    clientID: "775429522651949",
    clientSecret: constants.FACEBOOK_SECRET,
    profileFields: ["id", "birthday", "email", "first_name", "gender", "last_name","profileUrl", "picture.width(200).height(200)"],
}

const facebookStrategy = new FacebookStrategy( fbOpts, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(profile)
        let user = await User.findOne({ facebookId: profile.id})
        if(user) {
            console.log("User exists")
            let updateUser = {
                name: profile.displayName,
                avatar: profile.photos[0].value
            }
            user = await User.findByIdAndUpdate(user._id ,updateUser)
            done(null, user)
        } else {
            let newUser = new User({
                name: profile.displayName,
                facebookId: profile.id,
                avatar: profile.photos[0].value,
            })

            try {
                user = await User.create(newUser)
                done(null, user)
            } catch (e) {
                return done(error, false)
            }
        }
    } catch (error) {
        return done(error, false)
    }
})


passport.use(jwtStrategy)
passport.use(facebookStrategy)

export const authJwt = passport.authenticate('jwt', { session: false })
export const authFB = passport.authenticate('facebook-token', { session: false })
