const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index2.ts',
    output: {
        path: path.resolve('./dist'),
        filename: 'script/bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test: /.ts$/ ,
                use:[
                    {
                        loader: 'ts-loader',
                        options: {
                            "transpileOnly": true
                        }
                }]}
        ]
    },
    resolve:{
        extensions: ['.ts', '.js']
    }
}