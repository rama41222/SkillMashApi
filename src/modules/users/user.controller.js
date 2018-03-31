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
    const authToken = `bearer ${req.user.createToken()}`
    res.set('token', authToken)
    res.status(HTTP_STATUS.OK).json(req.user.toJSON())
    return next()
}

export async function profile(req, res) {
    try{
        const authToken = `bearer ${req.user.createToken()}`
        res.set('token', authToken)
        res.status(HTTP_STATUS.OK).json(req.user.toJSON())
    } catch(e) {
        console.log(e.message)
        res.status(HTTP_STATUS.BAD_REQUEST).send()
    }
}

export async function getSkills(req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decoded = await jwt.verify(token, constants.JWT_SECRET)
        const uuid = req.params.id || null

        if(!uuid) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).send()
        }

        let user = await User.findById(uuid)
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

        const uuid = req.params.id || null
        if(!uuid || uuid !== decoded._id) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).send()
        }

        const newSkill = req.body.skill

        let user = await User.findById(decoded._id)
        let skillArray = user.skills

        let newSkillSet = {
            skill: newSkill
        }

        newSkillSet = [newSkillSet]

        skillArray.push(newSkillSet)
        let newSkillArray = _.unionBy(newSkillSet, skillArray, 'skill');

        let newUser = await User.findByIdAndUpdate(user._id, { skills: newSkillArray})

        if(!newUser) {
            return res.status(HTTP_STATUS.NO_CONTENT).send()
        }

        res.status(HTTP_STATUS.OK).send()
    } catch(e) {
        console.log(e.message)
        res.status(HTTP_STATUS.BAD_REQUEST).send()
    }
}

export async function rateSkill(req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decoded = await jwt.verify(token, constants.JWT_SECRET)

        const newRating = req.body.rating
        const sid = req.params.sid
        const uuid = req.params.id || null

        if(!uuid) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).send()
        }

        let user = await User.findById(uuid)


        let skillArray = user.skills
        console.log(skillArray)

        let skill = await _.find(skillArray, function(o) {
            console.log(o)
            console.log(`sid ${sid} === > ${o._id}`)
            return o._id == sid
        });

        skill.rating.push(newRating)
        skill = [skill]

        let newSkillArray = _.unionBy(skill, skillArray, 'skill');
        console.log(newSkillArray)

        let newUser = await User.findByIdAndUpdate(user._id, { skills: newSkillArray})

        if(!user) {
            return res.status(HTTP_STATUS.NO_CONTENT).send()
        }

        res.status(HTTP_STATUS.OK).send()
    } catch(e) {
        console.log(e.message)
        res.status(HTTP_STATUS.BAD_REQUEST).send()
    }
}

export async function getAllUserRating(req, res) {
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decoded = await jwt.verify(token, constants.JWT_SECRET)

        let users = await User.find().select({token:0,email:0}).limit(50)
        let modUsers = []
        for(let user of users) {
            let featuredskill = user.skills[_.random(0, user.skills.length-1)]
            user.skills = featuredskill
            modUsers.push(user)
        }
        res.status(HTTP_STATUS.OK).send(modUsers)
    } catch(e) {
        console.log(e.message)
        res.status(HTTP_STATUS.BAD_REQUEST).send()
    }
}

