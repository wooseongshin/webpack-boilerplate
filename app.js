import express from "express";
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';
import path from "path";

const app = express();
const port = process.env.PORT || 3000;
const compiler = webpack(webpackConfig);
app.use(
    webpackDevMiddleware(compiler)
);

app.get("/", (req,res) => {
    res.sendFile(path.join(path.resolve(),'./dist/index.html'))
})

app.listen(port, ()=> console.log("Use port:",port));