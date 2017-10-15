const appRoot = require('app-root-path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');
import awesomeTypescripLoaderUtil from './util/awesome-typescript-loader';
import sourceMapLoaderUtil from './util/source-map-loader';
import sassLoaderUtil from './util/sassLoader';

const entry : string = appRoot + '/src/app.tsx';
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
            sassLoaderUtil
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: htmlTitle,
        inject: false,
        template: htmlWebpackTemplate,
        appMountId: htmlAppMountId
    })]
};
