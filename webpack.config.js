const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const createHtml =require("./config/create-html");// html配置
const getEntry = require("./config/get-entry");
const entry = getEntry("./src/pages");
const htmlArr = createHtml("./src/pages");

const config = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      // 'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist',
    serveIndex: true,
    index: 'index.html',
    historyApiFallback: {
      // 使用正则匹配命中路由
      rewrites: [
        {
          from: /^\/me|new|page|release|setting|donation\/.*$/,
          to: function(context) {
            return   context.parsedUrl.pathname+'.html';
          }
        }
      ]
    }
  },
  // TODO 区分dev prd
  externals: {
    '@editorjs/editorjs': 'EditorJS',
    'react':'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
    ...htmlArr,
    // new HtmlWebpackPlugin({
    //   // appMountId: 'app',
    //   template: "./src/index.html",
    //   filename: 'index.html',
    //   meta:{
    //     keywords: "webpack，react，github",
    //     description:  "这是一个webpack，react多页面架构"
    //   },
    // }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return config;
};