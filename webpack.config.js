const path = require('path')

module.exports = {
    entry: ['./src/main.js'], 
    output: {
        path: path.join(__dirname, '/'), 
        filename: 'index.js',
        library:'check-var-types',
        libraryTarget:'umd'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                        ]
                    }
                }
            }
        ]
    }
}
