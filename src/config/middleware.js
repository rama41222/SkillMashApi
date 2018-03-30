/*
 * Created by Rama41222 on 3/31/18 2:40 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 3/31/18 2:25 AM by  Rama41222
 */

import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import passport from 'passport'
import helmet from 'helmet'
import compression from 'compression'

const isProd = process.env.NODE_ENV === 'production'
const isDev = process.env.NODE_ENV === 'development'

export default app => {

    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    if (isDev) {
        app.use(morgan('dev'))
    }

    if (isProd) {
        app.use(compression())
        app.use(helmet())
    }
    app.use(passport.initialize())

}
