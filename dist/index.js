"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = exports.OAuth2Client = void 0;
const rbm_api_helper_1 = __importDefault(require("./lib/rbm_api_helper"));
const googleapis_common_1 = require("googleapis-common");
Object.defineProperty(exports, "OAuth2Client", { enumerable: true, get: function () { return googleapis_common_1.OAuth2Client; } });
Object.defineProperty(exports, "JWT", { enumerable: true, get: function () { return googleapis_common_1.JWT; } });
exports.default = rbm_api_helper_1.default;
//# sourceMappingURL=index.js.map