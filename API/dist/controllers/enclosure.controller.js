"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnclosureController = void 0;
var express = require("express");
var services_1 = require("../services");
var utils_1 = require("../utils");
var middlewares_1 = require("../middlewares");
var EnclosureController = /** @class */ (function () {
    function EnclosureController() {
        this.path = "/enclosure";
        this.enclosureService = new services_1.EnclosureService();
    }
    /** [POST] **/
    /* Create enclosure */
    EnclosureController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, description, image, type, capacity, openingHours, duration, status, bestMaintenanceMonth, handicapAccessible, trimmedName, trimmedDescription, trimmedImage, trimmedType, trimmedOpeningHours, animals, enclosure;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, description = _a.description, image = _a.image, type = _a.type, capacity = _a.capacity, openingHours = _a.openingHours, duration = _a.duration, status = _a.status, bestMaintenanceMonth = _a.bestMaintenanceMonth, handicapAccessible = _a.handicapAccessible;
                        trimmedName = name.trim().toLowerCase();
                        trimmedDescription = description.trim();
                        trimmedImage = image.trim();
                        trimmedType = type.trim().toLowerCase();
                        trimmedOpeningHours = openingHours.trim();
                        animals = [];
                        return [4 /*yield*/, this.enclosureService.createEnclosure({
                                name: trimmedName,
                                description: trimmedDescription,
                                image: trimmedImage,
                                type: trimmedType,
                                capacity: capacity,
                                openingHours: trimmedOpeningHours,
                                duration: duration,
                                status: status,
                                bestMaintenanceMonth: bestMaintenanceMonth,
                                handicapAccessible: handicapAccessible,
                                animals: animals
                            })];
                    case 1:
                        enclosure = _b.sent();
                        enclosure ? res.json(enclosure) : utils_1.ExpressUtils.conflict(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [GET] **/
    /* Get all enclosures */
    EnclosureController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var enclosures;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.enclosureService.getAllEnclosures()];
                    case 1:
                        enclosures = _a.sent();
                        enclosures ? res.json(enclosures) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Get enclosure by name */
    EnclosureController.prototype.getByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name_1, enclosure;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof req.query.name === 'string')) return [3 /*break*/, 2];
                        name_1 = req.query.name.trim().toLowerCase();
                        if (!utils_1.ExpressUtils.isValid(res, name_1, 'string', 2, 50)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.enclosureService.getEnclosureByName(name_1)];
                    case 1:
                        enclosure = _a.sent();
                        enclosure ? res.json(enclosure) : utils_1.ExpressUtils.notFound(res);
                        return [3 /*break*/, 3];
                    case 2:
                        utils_1.ExpressUtils.badRequest(res);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** [PATCH] **/
    /* Update enclosure by name */
    EnclosureController.prototype.updateByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, _a, description, image, type, capacity, openingHours, duration, status, bestMaintenanceMonth, handicapAccessible, updatedEnclosure;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        name = req.params.name.trim().toLowerCase();
                        _a = req.body, description = _a.description, image = _a.image, type = _a.type, capacity = _a.capacity, openingHours = _a.openingHours, duration = _a.duration, status = _a.status, bestMaintenanceMonth = _a.bestMaintenanceMonth, handicapAccessible = _a.handicapAccessible;
                        return [4 /*yield*/, this.enclosureService.updateEnclosureByName(name, {
                                description: description,
                                image: image,
                                type: type,
                                capacity: capacity,
                                openingHours: openingHours,
                                duration: duration,
                                status: status,
                                bestMaintenanceMonth: bestMaintenanceMonth,
                                handicapAccessible: handicapAccessible
                            })];
                    case 1:
                        updatedEnclosure = _b.sent();
                        updatedEnclosure ? res.json(updatedEnclosure) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Set maintenance by name */
    EnclosureController.prototype.setMaintenance = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, status, updatedEnclosure;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.params.name.trim().toLowerCase();
                        status = req.body.status;
                        if (!utils_1.ExpressUtils.isValid(res, name, 'string', 2, 50)) {
                            return [2 /*return*/];
                        }
                        if (!utils_1.ExpressUtils.isValid(res, status, 'boolean')) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.enclosureService.setMaintenance(name, status)];
                    case 1:
                        updatedEnclosure = _a.sent();
                        updatedEnclosure ? res.json(updatedEnclosure) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [DELETE] **/
    /* Delete enclosure by name */
    EnclosureController.prototype.deleteByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, deletedEnclosure;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.params.name.trim().toLowerCase();
                        if (!utils_1.ExpressUtils.isValid(res, name, 'string', 2, 50)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.enclosureService.deleteEnclosureByName(name)];
                    case 1:
                        deletedEnclosure = _a.sent();
                        deletedEnclosure ? utils_1.ExpressUtils.noContent(res) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Router */
    EnclosureController.prototype.buildRoutes = function () {
        var router = express.Router();
        router.get('/', (0, middlewares_1.checkAuthToken)(), this.getAll.bind(this));
        router.get('/id', (0, middlewares_1.checkAuthToken)(), this.getByName.bind(this));
        router.post('/create', express.json(), (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRole)(['admin']), middlewares_1.validateCreateRequest, this.create.bind(this));
        router.patch('/:name', express.json(), (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRole)(['admin']), middlewares_1.validateUpdateByNameRequest, this.updateByName.bind(this));
        router.patch('/:name/maintenance', express.json(), (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRole)(['admin']), this.setMaintenance.bind(this));
        router.delete('/:name', (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRole)(['admin']), this.deleteByName.bind(this));
        return router;
    };
    return EnclosureController;
}());
exports.EnclosureController = EnclosureController;
//# sourceMappingURL=enclosure.controller.js.map