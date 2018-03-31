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

        const profJson = profile._json
        const name = profJson.first_name +  " " + profJson.last_name
        const pic = profJson.picture
        const imgData = pic.data
        const id = profile.id
        const img = imgData.url
        const email = profJson.email

        let user = await User.findOne({ facebookId: id})
        console.log(user)
        if(user) {
            let updateUser = {
                name: name,
                avatar: img
            }
            let updateDUser = await User.findByIdAndUpdate(user._id ,updateUser)
            return done(null, updateDUser)
        } else {

            console.log("--------->> ")
            let newUser = new User({
                name: name,
                facebookId: id,
                avatar: img,
                email: email
            })

            try {
                const userNew = await User.create(newUser)
                done(null, userNew)
            } catch (e) {
                return done(e, false)
            }
        }
    } catch (error) {
        console.log(error.message)
        return done(error, false)
    }
})


passport.use(jwtStrategy)
passport.use(facebookStrategy)

export const authJwt = passport.authenticate('jwt', { session: false })
export const authFB = passport.authenticate('facebook-token', { session: false })
