/*
 * Created by Rama41222 on 3/31/18 2:39 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 3/31/18 2:25 AM by  Rama41222
 */

import mongoose from 'mongoose'
import constants from './constants'
mongoose.Promise = global.Promise

mongoose.connect(constants.MONGO_URL).then(
    console.log(`
                Connected to mongodb @ ${constants.MONGO_URL}
    `)
).catch(e => {
    console.log(`
               Error occured when connecting to ${constants.MONGO_URL}
               ERROR: ${e.message}
    `)
})