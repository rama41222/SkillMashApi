/*
 * Created by Rama41222 on 3/31/18 2:50 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 2/19/18 2:36 PM by  Rama41222
 */

import jwt from 'jsonwebtoken'
import _ from 'lodash'
import HTTP_STATUS from 'http-status'
import constants from './../../config/constants'
import User from './user.model'

export function fbLogin(req, res, next) {
    res.status(HTTP_STATUS.OK).json(req.user.toJSON())
    return next()
}

export async function profile(req, res) {
    try{
        res.status(HTTP_STATUS.OK).json(req.user.toJSON())
    } catch(e) {
        res.status(HTTP_STATUS.BAD_REQUEST).send()
    }
}

export async function getSkills(req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decoded = await jwt.verify(token, constants.JWT_SECRET)

        let user = await User.findById(decoded._id)
            .select('skills')
            .populate('skills')

        if(!user) {
            return res.status(HTTP_STATUS.NO_CONTENT).send()
        }

        let skills = await user.toJSONSkills()

        res.status(HTTP_STATUS.OK).json(skills)
    } catch(e) {
        res.status(HTTP_STATUS.BAD_REQUEST).send()
    }
}

export async function createSkills(req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decoded = await jwt.verify(token, constants.JWT_SECRET)
        const newRating = req.body.rating
        const newSkill = req.body.skill

        let user = await User.findById(decoded._id)

        let skillArray = user.skills

        const newSkillSet = {
            skill: newSkill,
            rating: newRating
        }

        skillArray.push(newSkillSet)
        let newUser = User.findByIdAndUpdate(user._id, { skills: skillArray})

        if(!newUser) {
            return res.status(HTTP_STATUS.NO_CONTENT).send()
        }

        res.status(HTTP_STATUS.OK).json({ skills: skillArray, user: newUser })
    } catch(e) {
        res.status(HTTP_STATUS.BAD_REQUEST).send()
    }
}

export async function updateSkills(req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decoded = await jwt.verify(token, constants.JWT_SECRET)
        const newRating = req.body.rating
        const newSkill = req.body.skill

        let user = await User.findById(decoded._id)

        let skillArray = user.skills

        const newSkillSet = {
            skill: newSkill,
            rating: newRating
        }

        skillArray.push(newSkillSet)
        let newUser = User.findByIdAndUpdate(user._id, {skills: skillArray})

        if(!newUser) {
            return res.status(HTTP_STATUS.NO_CONTENT).send()
        }

        res.status(HTTP_STATUS.OK).json({ skills: skillArray, user: newUser })
    } catch(e) {
        res.status(HTTP_STATUS.BAD_REQUEST).send()
    }
}

export async function removeSkills(req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decoded = await jwt.verify(token, constants.JWT_SECRET)
        const newRating = req.body.rating
        const newSkill = req.body.skill

        let user = await User.findById(decoded._id)

        let skillArray = user.skills

        if(!user) {
            return res.status(HTTP_STATUS.NO_CONTENT).send()
        }

        let skills = await user.toJSONSkills()

        res.status(HTTP_STATUS.OK).json(skills)
    } catch(e) {
        res.status(HTTP_STATUS.BAD_REQUEST).send()
    }
}