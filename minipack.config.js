
const path = require('path')
module.exports = {
    entry: 'src/entry.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist'),
    }
}