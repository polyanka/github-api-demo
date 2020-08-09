const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (_env, argv) => {
  return {
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        '@src': path.resolve(__dirname, 'src/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
        filename: 'index.html',
      }),
      new Dotenv(),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: argv.mode === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
};
