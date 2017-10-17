const appRoot = require('app-root-path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');
import tquinlan1992WebpackUtil from 'tquinlan1992-webpack-util';
const sourceMapLoaderUtil = tquinlan1992WebpackUtil.sourceMapLoader;
const sassLoaderUtil = tquinlan1992WebpackUtil.sassLoader;
const awesomeTypescripLoaderUtil = tquinlan1992WebpackUtil.awesomeTypescriptLoader;

const entry: string = appRoot + '/src/app.tsx';
const build = appRoot + '/build';
const appOutputPath = build;
const appOutputFilename = 'app.js';
const tsconfig = appRoot + '/tsconfig.json';
const extensions = [".ts", ".tsx", ".js", ".json"];
const htmlTitle = "Webpack-Angular";
const htmlAppMountId = 'app';

export default {
    entry: entry,
    output: {
        filename: appOutputFilename,
        path: appOutputPath
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: extensions
    },

    module: {
        rules: [
            awesomeTypescripLoaderUtil(tsconfig),
            sourceMapLoaderUtil,
            sassLoaderUtil,
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 2,
                    name: './images[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: htmlTitle,
        inject: false,
        template: htmlWebpackTemplate,
        appMountId: htmlAppMountId
    })]
};
