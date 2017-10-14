const path = require('path');
const appRoot = require('app-root-path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

const entry = appRoot + '/src/app.tsx';
const build = appRoot + '/build';
const appOutputPath = build;
const appOutputFilename = 'app.js';
const tsconfig = appRoot + '/src/tsconfig.json';

module.exports = {
    entry: entry,
    output: {
        filename: appOutputFilename,
        path: appOutputPath
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    configFileName: tsconfig
                },
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Webpack-Angular",
        inject: false,
        template: require('html-webpack-template'),
        appMountId: 'app'
    })]
};
