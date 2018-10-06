const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname,
        filename: './public/js/bundle.js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
            { test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/, use: 'url-loader' },
            { test: /\.(jpg|png|gif)$/, use: 'url-loader' },
        ]
    },
    devServer: {
        contentBase: './public',
        port: 3000
    },
    mode : "development",
    plugins: [
        new VueLoaderPlugin()
    ]
};