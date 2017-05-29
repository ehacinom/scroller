module.exports = {
    entry: './browser/js/app.js', // the starting point for our program
    output: {
        path: __dirname + '/browser', // the absolute path for the directory where we want the output to be placed
        filename: 'bundle.js'
    },
    context: __dirname,
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'env']
            }
        }]
    }
}