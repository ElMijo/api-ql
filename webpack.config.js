const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, "src/index.js"),
    mode: "production",
    externals: [nodeExternals()],
    output: {
        libraryTarget: 'commonjs',
        filename: 'index.js',
        path: path.resolve(__dirname, "lib"),
        publicPath: '/'
    },
    // plugins: [
    //     new webpack.NoEmitOnErrorsPlugin(),
    //     new webpack.optimize.OccurrenceOrderPlugin(),
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "eslint-loader"
                }
            }
        ]
    }
}
