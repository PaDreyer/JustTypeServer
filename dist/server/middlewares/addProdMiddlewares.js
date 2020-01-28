"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var compression = require("compression");
function addProdMiddlewares(app, options) {
    var publicPath = options.publicPath || '/';
    var outputPath = options.outputPath || path.resolve(process.cwd(), 'build');
    app.use(compression());
    app.use(publicPath, express.static(outputPath));
    app.get('*', function (req, res) {
        return res.sendFile(path.resolve(outputPath, 'index.html'));
    });
}
exports.default = addProdMiddlewares;
;
//# sourceMappingURL=addProdMiddlewares.js.map