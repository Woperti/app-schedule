const Dotenv = require('dotenv-webpack');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconWebpackPlugin = require('favicons-webpack-plugin');
const TerserWebpackPlugin = require("terser-webpack-plugin");
//const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const WorkBoxPlugin = require("workbox-webpack-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports =  {

        context: __dirname,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                    
                        "style-loader",
                         "css-loader",
                         'sass-loader',
                        
                    ]
                },
                {
                    test: /\.(jpg|png|gif|pdf|ico)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                          limit: 8192,
                          name: "static/media/[name].[hash:8].[ext]"
                        }
                      }
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    loader: require.resolve("file-loader"),
                    options: {
                        name: "static/media/[name].[hash:8].[ext]"
                    }
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack']
                },
            ]
        },
     
        plugins: [
            new HtmlWebPackPlugin({
                title: "Woperti",
                template: "./src/public/index.html",
                filename: "index.html"           
            }),
            // new WorkBoxPlugin.GenerateSW({
            //     clientsClaim: true, //
            //     skipWaiting: true
            // }),
            // new CopyWebpackPlugin([
            //     { from: './src/public/images', to: 'images'},
            //     { from: './src/public/manifest', to: 'manifest'}
            // ]),
            new ESLintPlugin({
                extensions: ['js', 'jsx'],
                emitWarning: true,
                emitError: false,
              }),
            new Dotenv({
                path: './.env', // load this now instead of the ones in '.env'
                safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
                allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
                systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
                silent: true, // hide any errors
                defaults: false
            }),
            //new webpack.IgnorePlugin(/\/iconv-loader$/),
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [
                        autoprefixer()
                    ]
                }
            }),
           /*  new FaviconWebpackPlugin({
                logo: './src/public/woperti.png',
                mode: 'webapp',
                cache: true
            }), */
            // new webpack.DefinePlugin({
            //     "process.env.NODE_ENV": JSON.stringify(
            //         isProduction ? "production" : "development"
            //     )
            // }),
        ],
        optimization: {
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false
                        },
                        mangle: {
                            safari10: true
                        },
                        output: {
                            comments: false,
                            ascii_only: true
                        },
                        warnings: false
                    }
                }),
                // new OptimizeCssAssetsPlugin(),
                //new CssMinimizerPlugin(),
            ],
        },
        devServer: {
            historyApiFallback: true,
          },
    }