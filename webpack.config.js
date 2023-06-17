const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack =require('webpack')

const isProduction = process.env.NODE_ENV === 'production'
const config = {
  entry : path.resolve(__dirname, "src",'index.tsx'),
  output : {path:path.resolve(__dirname,'dist')},
  mode : isProduction ? "production" : "development",
  plugins : [
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname, "src","index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React : "react"
    }),
  ],
  module : {
    rules: [
      {
        test : /\.(tsx?|js)$/,
        exclude : /node_modules/,
        use : ["babel-loader","ts-loader"],
      },
      {
        test : /\.css$/i,
        use : ["style-loader",'css-loader']
      },
      {
        test : /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type : "asset"
      },
    ],
  },
  resolve : {
    extensions : [".tsx",".ts",".jsx",".js"],
  },
  optimization:{
    minimize: true,
    minimizer:[
      new TerserPlugin({
        terserOptions:{
          compress : {
            drop_console : true //콘솔로그 제거
          },
          format : {
            comments : true, //주석제거
          },
        },
      }),
    ],
  },
  devServer : {
    historyApiCallback : true,
    port : 8080,
    hot : true,
    inline : true,
    publicPath : "/",
    open: true,
  }
}

module.exports = config;