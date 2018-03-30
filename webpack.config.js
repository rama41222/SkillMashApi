/*
 * Created by Rama41222 on 3/31/18 2:22 AM
 * Copyright(c) 2018  All rights reserved
 * Last Modified: 3/31/18 2:19 AM by  Rama41222
 */

const path = require('path')
const exludedModules = require('webpack-node-externals')
const env = process.env.NODE_ENV

module.exports = {
    target:'node',
    node: {
        __dirname: false,
    },
    externals: [exludedModules()],
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename:'index.bundle.js'
    },
    module: {
        rules: [
            {test: /.js$/, loader: 'babel-loader',  exclude: /node_modules/, query: { presets:  ['env','stage-2'] }},
        ]
    }
}
