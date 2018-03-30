/*
 * Created by Rama41222 on 3/31/18 2:24 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 3/31/18 2:23 AM by  Rama41222
 */


import express from 'express'
import middleware from './config/middleware'
import routes from './modules/index.routes'
import './config/database'
import constants from './config/constants'

const app = express()
middleware(app)
routes(app)

app.listen(constants.port, e => {
    if(e) {
        console.log(e.message)
        return
    }
    console.log(`
                 SKILLMASH IS RUNNING ON PORT ${constants.port}
    `)
})