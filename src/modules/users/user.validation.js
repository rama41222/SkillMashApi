/*
 * Created by Rama41222 on 3/31/18 2:53 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 2/16/18 4:58 PM by  Rama41222
 */


import Joi from 'joi'


export default {

    skills: {
        body: {
            skill: Joi.string().required(),
        },
    },
    rating: {
        body: {
            rating: Joi.number().min(0).max(5).required(),
        },
    },

}