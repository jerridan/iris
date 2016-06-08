var path = require('path');
var webpack = require('webpack');

var DEBUG = process.env.NODE_ENV === 'production';

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin()
];

plugins.push(new webpack.DefinePlugin({"global.GENTLY": false}));

if (DEBUG) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
} else {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    }),
    new webpack.NoErrorsPlugin()
  );
}


var entry = ['./jsx/app.jsx'];
if (DEBUG) {
  entry.push('webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server');
}

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, "js"),
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader",
          "babel-loader?optional&optional=runtime"]
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader?minimize!autoprefixer-loader?{browsers:["last 2 version", "ie > 7"]}!less-loader'
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        loader: 'url-loader?limit=1&name=img/[name].[ext]'
      }
    ]
  },
  node: {
    __dirname: true
  },
  devServer: {
    contentBase: "./",
    hot: true,
    stats: {
      colors: true
    }
  },
  plugins: plugins
};