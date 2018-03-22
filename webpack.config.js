module.exports = {
    devtool: 'cheap-source-map',
    entry: {
        'background': './app/background.ts',
        'convert': './app/convert-watcher.ts'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/app/scripts/'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [],
    resolve: {
        extensions: [".ts", ".js"]
    },
};
