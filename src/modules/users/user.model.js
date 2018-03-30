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
        index: { unique: true },
        default: null,
    },
    avatar: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        required: [true, 'Name cannot be empty'],
        trim: true,
    },
    skills: [{
        skill: {type: String, index: true},
        rating: {type: Number,index: true}
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
            skills: this.skills,
            name: this.name,
            avatar: this.avatar,
            token: `bearer ${this.createToken()}`,
        }
    },
    toJSONSkills() {
        return {
            achievements: _.toArray(this.skills),
        }
    },
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
