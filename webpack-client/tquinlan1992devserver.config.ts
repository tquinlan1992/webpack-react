import generatedWebpackConfig from './webpack.config';
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const port = 8080;

const compiler = webpack(generatedWebpackConfig);

compiler.run((err: any, stats: any) => {

})

var server = new WebpackDevServer(compiler, {});
server.listen(port, "localhost", () => {
    console.log("webpack dev server listening on port: " + port)
});
