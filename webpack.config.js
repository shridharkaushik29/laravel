const path = require("path");
const webpack = require("webpack");
require("dotenv").config();

module.exports = (env = {}) => {

    const {app, mode} = env;

    if (!app) {
        throw "Please provide an app name";
    }

    const {APP_URL, ASSETS_URL} = process.env;

    let publicPath = `${ASSETS_URL}/assets/${app}/`;

    let src = path.resolve(__dirname, `resources/assets/${app}/`);

    return {
        mode: mode,
        entry: [
            path.resolve(src, "index.ts"),
            `!file-loader?name=style.css!extract-loader!css-loader!sass-loader!${path.resolve(src, "index.scss")}`
        ],
        output: {
            path: path.resolve(__dirname, `./public/assets/${app}/`),
            publicPath: publicPath
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /node_modules/,
                        name: "vendor",
                        enforce: true,
                        chunks: "initial"
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: true,
                                experimentalWatchApi: true
                            }
                        }
                    ]
                },
                {
                    test: /(?!component)\.(css|less|scss)$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /external\.(css|less|scss)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[path][name].css"
                            }
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: ["sass-loader"]
                },
                {
                    test: /\.less$/,
                    use: ["less-loader"]
                },
                {
                    test: /\.component\.scss$/,
                    use: "!file-loader?name=[path][name].css!extract-loader!css-loader!sass-loader"
                },
                {
                    test: /\.component\.less$/,
                    use: "!file-loader?name=[path][name].css!extract-loader!css-loader!less-loader"
                },
                {
                    test: /(component|template)\.html$/,
                    use: [
                        {
                            "loader": "file-loader",
                            "options": {
                                "name": "[path][name].template"
                            }
                        }, "extract-loader"]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: {
                                interpolate: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(svg|jpg|png|jpeg|gif|eot|woff|ttf)/,
                    use: "file-loader"
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx']
        },
        plugins: [
            new webpack.DefinePlugin({
                env: JSON.stringify({APP_URL})
            })
        ]
    }
}
