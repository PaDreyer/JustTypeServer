"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var argv_1 = __importDefault(require("./argv"));
exports.default = parseInt(argv_1.default.port || process.env.PORT || '3000', 10);
//# sourceMappingURL=port.js.map