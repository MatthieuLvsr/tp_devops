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
exports.EnclosureService = void 0;
var models_1 = require("../models");
var EnclosureService = /** @class */ (function () {
    function EnclosureService() {
        this.enclosureModel = models_1.EnclosureModel;
    }
    EnclosureService.prototype.createEnclosure = function (enclosure) {
        return __awaiter(this, void 0, void 0, function () {
            var createdEnclosure, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.enclosureModel.create({
                                name: enclosure.name,
                                description: enclosure.description,
                                image: enclosure.image,
                                type: enclosure.type,
                                capacity: enclosure.capacity,
                                openingHours: enclosure.openingHours,
                                duration: enclosure.duration,
                                status: enclosure.status,
                                bestMaintenanceMonth: enclosure.bestMaintenanceMonth,
                                handicapAccessible: enclosure.handicapAccessible
                            })];
                    case 1:
                        createdEnclosure = _a.sent();
                        return [2 /*return*/, createdEnclosure];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EnclosureService.prototype.getAllEnclosures = function () {
        return __awaiter(this, void 0, void 0, function () {
            var enclosures, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.enclosureModel.find().populate('animals')];
                    case 1:
                        enclosures = _a.sent();
                        return [2 /*return*/, enclosures];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EnclosureService.prototype.getEnclosureByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var req, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.enclosureModel.findOne({ name: name }).populate('animals')];
                    case 1:
                        req = _a.sent();
                        return [2 /*return*/, req];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EnclosureService.prototype.updateEnclosureByName = function (name, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedEnclosure, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.enclosureModel.findOneAndUpdate({ name: name }, updateData, { new: true }).populate('animals')];
                    case 1:
                        updatedEnclosure = _a.sent();
                        return [2 /*return*/, updatedEnclosure];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EnclosureService.prototype.setMaintenance = function (name, status) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedEnclosure, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.enclosureModel.findOneAndUpdate({ name: name }, { status: status }, { new: true }).populate('animals')];
                    case 1:
                        updatedEnclosure = _a.sent();
                        return [2 /*return*/, updatedEnclosure];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EnclosureService.prototype.deleteEnclosureByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedEnclosure, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.enclosureModel.findOneAndDelete({ name: name }).populate('animals')];
                    case 1:
                        deletedEnclosure = _a.sent();
                        return [2 /*return*/, deletedEnclosure ? true : false];
                    case 2:
                        error_6 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return EnclosureService;
}());
exports.EnclosureService = EnclosureService;
//# sourceMappingURL=enclosure.service.js.map