/*
 * Created by Rama41222 on 3/31/18 2:29 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 3/31/18 2:25 AM by  Rama41222
 */




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