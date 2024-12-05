const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    moduleIds: "hashed",
    runtimeChink: {
      name: "manifest"
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, 
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      }),
    ],
    noEmitOnErrors: true,
    namedChunks: true
  },
  externals: {
    react: "React",
   "react-dom": "ReactDOM",
  },
  performance: {
    hints: "error",
    maxAssetSize: 100 * 1024, // 100 KiB 
    maxEntrypointSize: 100 * 1024, // 100 KiB
  }
})