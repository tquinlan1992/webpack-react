import generatedWebpackConfig from './webpack.config';
const webpack = require('webpack');

const compiler = webpack(generatedWebpackConfig);

compiler.run((err: any, stats: any) => {

})
