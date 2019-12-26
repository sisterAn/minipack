"use strict";
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        "index": "./src/entry.js",
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: "[name].bundle.js",
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    }
}
