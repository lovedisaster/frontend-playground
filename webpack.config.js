const { watchFile } = require("fs");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: 'index-bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
          index: 'index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|.jsx)$/, 
                exclude: /node_modules/, 
                use: {loader: 'babel-loader'}
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Frontend playground',
        favicon: path.resolve('./public/favicon.ico'),
        template: path.resolve('./public/index.html'),
        filename: 'index.html',
      })]
};