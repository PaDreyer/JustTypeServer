"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var path = __importStar(require("path"));
var webpack_1 = __importDefault(require("webpack"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var circular_dependency_plugin_1 = __importDefault(require("circular-dependency-plugin"));
var typescript_plugin_styled_components_1 = __importDefault(require("typescript-plugin-styled-components"));
var styledComponentsTransformer = typescript_plugin_styled_components_1.default();
var ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
var rootDir = path.join(process.cwd(), "./../../");
var webpack_base_babel_1 = __importDefault(require("./webpack.base.babel"));
module.exports = webpack_base_babel_1.default({
    mode: 'development',
    entry: [
        require.resolve('react-app-polyfill/ie11'),
        'webpack-hot-middleware/client?reload=true',
        path.join(rootDir, 'app/app.tsx'),
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new ErrorOverlayPlugin(),
        new webpack_1.default.HotModuleReplacementPlugin(),
        new html_webpack_plugin_1.default({
            inject: true,
            template: path.join(rootDir, 'app/index.html')
        }),
        new circular_dependency_plugin_1.default({
            exclude: /a\.js|node_modules/,
            failOnError: false,
        }),
    ],
    tsLoaders: [
        {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                logLevel: 'info',
                getCustomTransformers: function () { return ({
                    before: [styledComponentsTransformer],
                }); },
            },
        },
    ],
    devtool: 'cheap-module-source-map',
    performance: {
        hints: false,
    },
});
//# sourceMappingURL=webpack.dev.babel.js.map