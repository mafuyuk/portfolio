const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        hotReload: true,
                    }
                }
            },
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
            { test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/, use: 'url-loader' },
            { test: /\.(jpg|png|gif)$/, use: 'url-loader' },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        watchContentBase: true,
        hot: true,
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    performance: { hints: false }
};