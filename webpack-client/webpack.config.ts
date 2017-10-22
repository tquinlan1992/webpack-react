const appRoot = require('app-root-path');
import tquinlan1992WebpackUtil from 'tquinlan1992-webpack-util';

const {
    sourceMapLoader: sourceMapLoaderUtil,
    sassLoader: sassLoaderUtil,
    awesomeTypescriptLoader: awesomeTypescripLoaderUtil,
    urlLoader: urlLoaderUtil,
    htmlWebpackPlugin: htmlWebpackPluginUtil

} = tquinlan1992WebpackUtil;

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
    devtool: "source-map",
    resolve: {
        extensions: extensions
    },
    module: {
        rules: [
            awesomeTypescripLoaderUtil(tsconfig),
            sourceMapLoaderUtil,
            sassLoaderUtil,
            urlLoaderUtil({ path: './images/', limit: 250 })
        ]
    },
    plugins: [
        htmlWebpackPluginUtil({ htmlTitle, htmlAppMountId })
    ]
};
