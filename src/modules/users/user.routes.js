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

router.post('/auth/facebook', authFB, UserController.fbLogin)
router.get('/',authJwt , UserController.profile)
router.get('/skills',authJwt , UserController.getSkills)
router.post('/skills',[ authJwt, validation(UserValidation.skills) ] , UserController.createSkills)

export default router