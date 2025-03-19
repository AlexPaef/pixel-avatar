const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: "PixelAvatar",
        libraryTarget: "umd",
        globalObject: "this"
    },
    mode: "production"
};