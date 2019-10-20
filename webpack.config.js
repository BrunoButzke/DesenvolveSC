var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname , 'build'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {
          core: path.join(__dirname, 'core'),
        },
      },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test: /\.jsx?$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        })
    ]

}