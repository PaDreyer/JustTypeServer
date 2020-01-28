"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var userRouter_1 = __importDefault(require("./userRouter"));
var groupRouter_1 = __importDefault(require("./groupRouter"));
var betRouter_1 = __importDefault(require("./betRouter"));
router.use('/user', userRouter_1.default);
router.use('/group', groupRouter_1.default);
router.use('/bet', betRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map