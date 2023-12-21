"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityUtils = void 0;
var crypto = require("crypto");
var SecurityUtils = /** @class */ (function () {
    function SecurityUtils() {
    }
    SecurityUtils.toSHA512 = function (str) {
        if (typeof str !== 'string') {
            throw new Error('Invalid argument: str must be a string');
        }
        var hash = crypto.createHash('sha512');
        hash.update(str);
        return hash.digest('hex');
    };
    return SecurityUtils;
}());
exports.SecurityUtils = SecurityUtils;
//# sourceMappingURL=security.utils.js.map