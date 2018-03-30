/*
 * Created by Rama41222 on 3/31/18 2:29 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 3/31/18 2:25 AM by  Rama41222
 */

const devConfig = {
    MONGO_URL: 'mongodb://localhost/skillmash-dev',
    JWT_SECRET: 'df#$EFDT$^$%&*(YUHGFYR^THF%$ETRFDfdrt56t5$N3cRH`',
    FACEBOOK_SECRET:'f7624dfdaaa399e073a16e9b69cbe1ca'
}

const prodConfig = {
    MONGO_URL: 'mongodb://localhost/skillmash-prod',
    JWT_SECRET: '[k.|zO\'1Pdf#$EFDT$^$%&*(YUHGFYR^THF%$ETRFDfdrt56t5$N3cRH&oCA~t_!`pz=u-`byQ+)v:+^N3cRH`',
    FACEBOOK_SECRET:'f7624dfdaaa399e073a16e9b69cbe1ca'
}

const defaultConfig = {
    port: process.env.port || 3410,
    version: 'API v1.0.0'
}

function getConfig(env) {
    switch (env) {
        case 'development':
            return devConfig
        case 'production':
            return prodConfig
        default:
            return devConfig
    }
}

export default {
    ...defaultConfig,
    ...getConfig(process.env.NODE_ENV)
}