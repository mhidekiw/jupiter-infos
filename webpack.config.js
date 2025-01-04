const path = require("path");

module.exports = {
    entry : {
        index : "./src/index.ts"
    },
    output : {
        filename: "bundle.js",
        path : path.resolve(__dirname, "public"),
    },
    mode: "production",
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