const path = require('path')

module.exports = {
    //entry: './src/main.js', //入口文件，src下的index.js
    //entry: ["@babel/polyfill",'./src/main.js'], //入口文件，src下的index.js
    entry: ['./src/main.js'], //入口文件，src下的index.js
    output: {
        path: path.join(__dirname, '/'), // 出口目录，dist文件
        filename: 'index.js' //这里name就是打包出来的文件名，因为是单入口，就是main，多入口下回分解
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
