const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = ({dev}) => ({
    mode: dev ? 'development' : 'production',
    entry: {
        index: './src/index.tsx',
    },
    devtool: dev ? 'source-map' : false,
    devServer: { 
        //contentBase: './dist',
        //contentBase: path.join(__dirname, './dist'),
        //contentBase: path.resolve(__dirname, './dist'),
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        open: true,
        hot: true,
        port: 3000, 
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ 
                from: 'public',
                noErrorOnMissing: true,
            }],
        }),
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new CleanWebpackPlugin(),
        new PrettierPlugin(),
        new ESLintPlugin({ extensions: ["ts", "js", "tsx"]}), 
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: 'assets/[hash][ext]',
    },
});
