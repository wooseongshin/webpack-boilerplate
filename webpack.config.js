import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
    entry: './src/index.js',
    devtool:'inline-source-map',//개발용
    output: {
        filename: 'bundle.js',
        path: path.join(path.resolve(), 'dist'),
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // 기존에 있던 파일을 이용해서 테마를 만들어줌
        }),
        new MiniCssExtractPlugin({
            filename: 'common.css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(path.resolve(), 'dist')
        },
        port: 3000
    }
}

export default config