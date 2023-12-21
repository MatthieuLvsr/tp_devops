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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalService = void 0;
var models_1 = require("../models");
var AnimalService = /** @class */ (function () {
    function AnimalService() {
        this.animalModel = models_1.AnimalModel;
        this.enclosureModel = models_1.EnclosureModel;
    }
    AnimalService.prototype.createAnimal = function (animal) {
        return __awaiter(this, void 0, void 0, function () {
            var createdAnimal, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.animalModel.create({
                                name: animal.name,
                                description: animal.description,
                                image: animal.image,
                                species: animal.species,
                                age: animal.age,
                                enclosure: animal.enclosure
                            })];
                    case 1:
                        createdAnimal = _a.sent();
                        return [2 /*return*/, createdAnimal];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AnimalService.prototype.getAllAnimals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var animals, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.animalModel.find().populate('enclosure')];
                    case 1:
                        animals = _a.sent();
                        return [2 /*return*/, animals];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AnimalService.prototype.getAnimalByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var req, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.animalModel.findOne({ name: name }).populate('enclosure')];
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
    AnimalService.prototype.updateAnimalByName = function (name, updateData) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedAnimal, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.animalModel.findOneAndUpdate({ name: name }, updateData, { new: true }).populate('enclosure')];
                    case 1:
                        updatedAnimal = _a.sent();
                        return [2 /*return*/, updatedAnimal];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AnimalService.prototype.deleteAnimalByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedAnimal, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.animalModel.findOneAndDelete({ name: name }).populate('enclosure')];
                    case 1:
                        deletedAnimal = _a.sent();
                        return [2 /*return*/, deletedAnimal ? true : false];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AnimalService.prototype.moveAnimal = function (animalName, enclosureName) {
        return __awaiter(this, void 0, void 0, function () {
            var animal, previousEnclosure, targetEnclosure, previousAnimals, updatedPrevious, targetAnimals, updatedTarget, updatedAnimal, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 11, , 12]);
                        return [4 /*yield*/, this.animalModel.findOne({ name: animalName })];
                    case 1:
                        animal = _a.sent();
                        if (!(animal !== null)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.enclosureModel.findById(animal.enclosure)];
                    case 2:
                        previousEnclosure = _a.sent();
                        return [4 /*yield*/, this.enclosureModel.findOne({ name: enclosureName })];
                    case 3:
                        targetEnclosure = _a.sent();
                        if (!(previousEnclosure !== null && targetEnclosure !== null)) return [3 /*break*/, 7];
                        previousAnimals = __spreadArray([], previousEnclosure.animals, true);
                        previousAnimals.splice(previousAnimals.indexOf(animal), 1);
                        return [4 /*yield*/, this.enclosureModel.findOneAndUpdate({ name: previousEnclosure.name }, { animals: previousAnimals })];
                    case 4:
                        updatedPrevious = _a.sent();
                        targetAnimals = __spreadArray([], targetEnclosure.animals, true);
                        targetAnimals.push(animal);
                        return [4 /*yield*/, this.enclosureModel.findOneAndUpdate({ name: targetEnclosure.name }, { animals: targetAnimals })];
                    case 5:
                        updatedTarget = _a.sent();
                        return [4 /*yield*/, this.animalModel.findOneAndUpdate({ name: animalName }, { enclosure: targetEnclosure }).populate('enclosure')];
                    case 6:
                        updatedAnimal = _a.sent();
                        return [2 /*return*/, updatedAnimal];
                    case 7: return [2 /*return*/, null];
                    case 8: return [3 /*break*/, 10];
                    case 9: return [2 /*return*/, null];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        error_6 = _a.sent();
                        return [2 /*return*/, null];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return AnimalService;
}());
exports.AnimalService = AnimalService;
//# sourceMappingURL=animal.service.js.map