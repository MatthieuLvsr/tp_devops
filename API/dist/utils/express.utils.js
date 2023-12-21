"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressUtils = void 0;
var ExpressUtils = /** @class */ (function () {
    function ExpressUtils() {
    }
    ExpressUtils.isValid = function (res, value, type, min, max) {
        switch (type) {
            case 'string':
                return this.isString(res, value, min, max);
            case 'number':
                return this.isNumber(res, value, min, max);
            case 'boolean':
                return typeof value === 'boolean' || this.badRequest(res);
            case 'array':
                return this.isArrayOfStrings(res, value, min, max);
            default:
                return this.badRequest(res);
        }
    };
    ExpressUtils.isString = function (res, value, minLength, maxLength) {
        if (typeof value !== 'string') {
            console.log('string');
            this.badRequest(res);
            return false;
        }
        if (minLength !== undefined && value.length < minLength) {
            console.log('minLengthString');
            this.badRequest(res);
            return false;
        }
        if (maxLength !== undefined && value.length > maxLength) {
            console.log('maxLengthString');
            this.badRequest(res);
            return false;
        }
        return true;
    };
    ExpressUtils.isNumber = function (res, value, min, max) {
        if (typeof value !== 'number') {
            this.badRequest(res);
            return false;
        }
        if (min !== undefined && value < min) {
            this.badRequest(res);
            return false;
        }
        if (max !== undefined && value > max) {
            this.badRequest(res);
            return false;
        }
        return true;
    };
    ExpressUtils.isArrayOfStrings = function (res, value, minLength, maxLength) {
        if (!Array.isArray(value)) {
            console.log('array');
            this.badRequest(res);
            return false;
        }
        if (minLength !== undefined && value.length < minLength) {
            console.log('minLength');
            this.badRequest(res);
            return false;
        }
        if (maxLength !== undefined && value.length > maxLength) {
            console.log('maxLength');
            this.badRequest(res);
            return false;
        }
        return true;
    };
    ExpressUtils.isImageUrlOrPath = function (value) {
        return value.match(/^((http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png))|(([/|.|\w|\s|-])*\.(?:jpg|gif|png))$/) !== null;
    };
    /* 2xx Success */
    ExpressUtils.noContent = function (res) {
        res.status(204).end();
    };
    ExpressUtils.created = function (res, data) {
        res.status(201).json(data);
    };
    /* 4xx Client errors */
    ExpressUtils.badRequest = function (res) {
        res.status(400).end();
        return false;
    };
    ExpressUtils.unauthorized = function (res) {
        res.status(401).end();
    };
    ExpressUtils.forbidden = function (res) {
        res.status(403).end();
    };
    ExpressUtils.notFound = function (res) {
        res.status(404).end();
    };
    ExpressUtils.conflict = function (res) {
        res.status(409).end();
    };
    ExpressUtils.internalServerError = function (res) {
        res.status(500).end();
    };
    return ExpressUtils;
}());
exports.ExpressUtils = ExpressUtils;
//# sourceMappingURL=express.utils.js.map