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
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var webpack_1 = __importDefault(require("webpack"));
var webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
var webpack_hot_middleware_1 = __importDefault(require("webpack-hot-middleware"));
function createWebpackMiddleware(compiler, publicPath) {
    return webpack_dev_middleware_1.default(compiler, {
        logLevel: 'warn',
        publicPath: publicPath,
        silent: true,
        stats: 'errors-only',
    });
}
function addDevMiddlewares(app, webpackConfig) {
    var compiler = webpack_1.default(webpackConfig);
    var middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);
    app.use(middleware);
    app.use(webpack_hot_middleware_1.default(compiler));
    var fs = middleware.fileSystem;
    app.get('*', function (req, res) {
        fs.readFile(path.join(compiler.outputPath, 'index.html'), function (err, file) {
            if (err) {
                res.sendStatus(404);
            }
            else {
                res.send(file.toString());
            }
        });
    });
}
exports.default = addDevMiddlewares;
;
//# sourceMappingURL=addDevMiddlewares.js.map