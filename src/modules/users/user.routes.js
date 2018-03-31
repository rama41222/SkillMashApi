/*
 * Created by Rama41222 on 3/31/18 2:50 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 2/16/18 5:50 PM by  Rama41222
 */
import { Router } from 'express'
import validation from 'express-validation'
import UserValidation from './user.validation'
import * as UserController from './user.controller'
import { authJwt, authFB } from '../../services/auth.service'

const router = Router()

//users OK
router.post('/auth/facebook', authFB, UserController.fbLogin)

//get user profile OK
router.get('/:id',authJwt , UserController.profile)

//skills

//get user skills OK
router.get('/:id/skills',authJwt , UserController.getSkills)

//create a skill OK
router.post('/:id/skills',[ authJwt, validation(UserValidation.skills) ] , UserController.createSkills)

//update a skill
router.put('/:id/skills/:sid',authJwt , UserController.updateSkills)


//remove a skill
router.delete('/:id/skills/:sid',authJwt , UserController.removeSkills)


// //friends
//
// //get all my friends
// router.get('/:id/friends',authJwt , UserController.getSkills)
//
// //get my friends profile
// router.get('/:id/friends/:fid',authJwt , UserController.getSkills)
//
// //remove user as a friend
// router.delete('/:id/friends/:fid',authJwt , UserController.getSkills)
//
//
// ////get my friends skills
// router.get('/:id/friends/:fid/skills',authJwt , UserController.getSkills)
//
// ////rate my friends skills
// router.post('/:id/friends/:fid/skills/:sid',[ authJwt, validation(UserValidation.skills) ] , UserController.createSkills)
//
// //users
//
// //get all users
// router.get('/',authJwt , UserController.getSkills)
// //add user as a friend
// router.post('/:uid',authJwt , UserController.getSkills)



export default router