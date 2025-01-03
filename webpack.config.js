const path = require("path");

module.exports = {
    entry : {
        index : "./src/index.ts"
    },
    output : {
        filename: "bundle.js",
        path : path.resolve(__dirname, "public"),
    },
    mode: "development",
    module : {
        rules : [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.ts/,
                use: "ts-loader"
            }
        ]
    },
    devServer : {
        open: true
    }
};