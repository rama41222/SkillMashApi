/*
 * Created by Rama41222 on 3/31/18 2:44 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 2/16/18 5:40 PM by  Rama41222
 */

import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import constants from '../../config/constants'
import _ from 'lodash'

const UserSchema = new Schema({

    facebookId: {
        type: String,
        trim: true,
        required: true,
        index: { unique: true }
    },
    avatar: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    skills: [{
        skill: {type: String, default: "Default"},
        rating: [{type: Number, default: 0}],
    }],
    friends:[{
        type: String,
        ref: 'User'
    }],
    block: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

UserSchema.methods = {
    createToken() {
        return jwt.sign(
            {
                _id: this._id,
                facebookId: this.facebookId
            },
            constants.JWT_SECRET,
        )
    },
    toJSON() {
        return {
            _id: this._id,
            name: this.name,
            avatar: this.avatar,
            email:this.email,
            skills: this.skills,
            friends: this.friends
        }
    },
    toJSONSkills() {
        return {
            skills: _.toArray(this.skills),
        }
    },
    toJSONImportant() {
        return {
            _id: this._id,
            name: this.name,
            avatar: this.avatar,
            skills: this.skills,
        }
    }
}

UserSchema.statics = {
    list({ skip = 0, limit = 50 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(+skip)
            .limit(+limit)
            .exec();
    },
    listBlocked({ skip = 0, limit = 50 } = {}) {
        return this.find({ block: true })
            .sort({ createdAt: -1 })
            .skip(+skip)
            .limit(+limit)
            .exec();
    },
}

export default mongoose.model('User', UserSchema)
