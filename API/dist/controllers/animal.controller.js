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
exports.AnimalController = void 0;
var express = require("express");
var services_1 = require("../services");
var utils_1 = require("../utils");
var middlewares_1 = require("../middlewares");
var AnimalController = /** @class */ (function () {
    function AnimalController() {
        this.path = "/animal";
        this.animalService = new services_1.AnimalService();
        this.enclosureService = new services_1.EnclosureService();
    }
    /** [POST] **/
    /* Create animal */
    AnimalController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, description, image, species, age, enclosure, trimmedName, trimmedDescription, trimmedImage, trimmedSpecies, trimmedEnclosure, desiredEnclosure, animal, animals;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, description = _a.description, image = _a.image, species = _a.species, age = _a.age, enclosure = _a.enclosure;
                        trimmedName = name.trim().toLowerCase();
                        trimmedDescription = description.trim();
                        trimmedImage = image.trim();
                        trimmedSpecies = species.trim().toLowerCase();
                        trimmedEnclosure = enclosure.trim().toLowerCase();
                        return [4 /*yield*/, this.enclosureService.getEnclosureByName(trimmedEnclosure)];
                    case 1:
                        desiredEnclosure = _b.sent();
                        return [4 /*yield*/, this.animalService.createAnimal({
                                name: trimmedName,
                                description: trimmedDescription,
                                image: trimmedImage,
                                species: trimmedSpecies,
                                age: age,
                                enclosure: desiredEnclosure ? desiredEnclosure : ""
                            })];
                    case 2:
                        animal = _b.sent();
                        if (desiredEnclosure != null && animal != null) {
                            animals = __spreadArray([], desiredEnclosure.animals, true);
                            animals.push(animal);
                            this.enclosureService.updateEnclosureByName(trimmedEnclosure, {
                                animals: animals
                            });
                        }
                        animal ? res.json(animal) : utils_1.ExpressUtils.conflict(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [GET] **/
    /* Get all animals */
    AnimalController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var animals;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.animalService.getAllAnimals()];
                    case 1:
                        animals = _a.sent();
                        animals ? res.json(animals) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Get animal by name */
    AnimalController.prototype.getByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name_1, animal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof req.query.name === 'string')) return [3 /*break*/, 2];
                        name_1 = req.query.name.trim().toLowerCase();
                        if (!utils_1.ExpressUtils.isValid(res, name_1, 'string', 2, 50)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.animalService.getAnimalByName(name_1)];
                    case 1:
                        animal = _a.sent();
                        animal ? res.json(animal) : utils_1.ExpressUtils.notFound(res);
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
    /* Update animal by name */
    AnimalController.prototype.updateByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, _a, description, image, species, age, enclosure, updatedAnimal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        name = req.params.name.trim().toLowerCase();
                        _a = req.body, description = _a.description, image = _a.image, species = _a.species, age = _a.age, enclosure = _a.enclosure;
                        return [4 /*yield*/, this.animalService.updateAnimalByName(name, {
                                description: description,
                                image: image,
                                species: species,
                                age: age,
                                enclosure: enclosure
                            })];
                    case 1:
                        updatedAnimal = _b.sent();
                        updatedAnimal ? res.json(updatedAnimal) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    AnimalController.prototype.moveAnimal = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, animal, enclosure, updatedAnimal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, animal = _a.animal, enclosure = _a.enclosure;
                        return [4 /*yield*/, this.animalService.moveAnimal(animal.toLowerCase(), enclosure.toLowerCase())];
                    case 1:
                        updatedAnimal = _b.sent();
                        updatedAnimal ? res.json(updatedAnimal) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [DELETE] **/
    /* Delete animal by name */
    AnimalController.prototype.deleteByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, deletedAnimal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.params.name.trim().toLowerCase();
                        if (!utils_1.ExpressUtils.isValid(res, name, 'string', 2, 50)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.animalService.deleteAnimalByName(name)];
                    case 1:
                        deletedAnimal = _a.sent();
                        deletedAnimal ? utils_1.ExpressUtils.noContent(res) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Router */
    AnimalController.prototype.buildRoutes = function () {
        var router = express.Router();
        router.get('/', this.getAll.bind(this));
        router.get('/id', this.getByName.bind(this));
        router.post('/create', express.json(), middlewares_1.validateCreateAnimalRequest, this.create.bind(this));
        router.patch('/move', express.json(), this.moveAnimal.bind(this));
        router.patch('/:name', express.json(), middlewares_1.validateUpdateAnimalByNameRequest, this.updateByName.bind(this));
        router.delete('/:name', this.deleteByName.bind(this));
        return router;
    };
    return AnimalController;
}());
exports.AnimalController = AnimalController;
//# sourceMappingURL=animal.controller.js.map