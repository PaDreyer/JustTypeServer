"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var addProdMiddlewares_1 = __importDefault(require("./addProdMiddlewares"));
var webpack_dev_babel_1 = __importDefault(require("../../internals/webpack/webpack.dev.babel"));
var addDevMiddlewares_1 = __importDefault(require("./addDevMiddlewares"));
exports.default = (function (app, options) {
    var isProd = process.env.NODE_ENV === 'production';
    if (isProd) {
        addProdMiddlewares_1.default(app, options);
    }
    else {
        addDevMiddlewares_1.default(app, webpack_dev_babel_1.default);
    }
    return app;
});
//# sourceMappingURL=frontendMiddleware.js.map