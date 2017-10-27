const appRoot = require('app-root-path');
import createWebpackPlugin from 'tquinlan1992-webpack-util';


const tquinlan1992WebpackUtilJSON = require('./tquinlan1992-webpack-util.json');

const absolutePathsConfig = Object.assign(tquinlan1992WebpackUtilJSON, {
    entry: appRoot + tquinlan1992WebpackUtilJSON.entry,
    appOutputPath: appRoot + tquinlan1992WebpackUtilJSON.appOutputPath,
    tsconfig: appRoot + tquinlan1992WebpackUtilJSON.tsconfig
})

export default createWebpackPlugin(absolutePathsConfig);
