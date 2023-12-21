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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var mongoose_1 = require("mongoose");
var models_1 = require("../models");
var utils_1 = require("../utils");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.userModel = models_1.UserModel;
        this.sessionModel = models_1.SessionModel;
        this.roleModel = models_1.RoleModel;
    }
    AuthService.prototype.createUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var createdUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userModel.create({
                                login: user.login,
                                password: utils_1.SecurityUtils.toSHA512(user.password),
                                role: user.role,
                                active: user.active,
                                workShift: user.workShift,
                            })];
                    case 1:
                        createdUser = _a.sent();
                        return [2 /*return*/, createdUser];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.findUserLogin = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var req, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userModel
                                .findOne({
                                login: credentials.login,
                                password: utils_1.SecurityUtils.toSHA512(credentials.password),
                            })
                                .exec()];
                    case 1:
                        req = _a.sent();
                        return [2 /*return*/, req];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.startSession = function (user, platform) {
        return __awaiter(this, void 0, void 0, function () {
            var session, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.sessionModel.create({
                                platform: platform,
                                user: user._id,
                            })];
                    case 1:
                        session = _a.sent();
                        return [4 /*yield*/, session.populate('user')];
                    case 2:
                        session = _a.sent();
                        return [2 /*return*/, session];
                    case 3:
                        err_3 = _a.sent();
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.endSession = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var session, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.sessionModel.findByIdAndDelete(token).exec()];
                    case 1:
                        session = _a.sent();
                        if (!session) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                    case 2:
                        err_4 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.findSession = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, mongoose_1.isValidObjectId)(token)) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.sessionModel
                                .findById(token)
                                .populate({ path: "user", populate: { path: "role", model: "Role" } })
                                .exec()];
                    case 1:
                        session = _a.sent();
                        return [2 /*return*/, session];
                }
            });
        });
    };
    AuthService.prototype.getAllEmployees = function () {
        return __awaiter(this, void 0, void 0, function () {
            var employees, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userModel.find().populate("role")];
                    case 1:
                        employees = _a.sent();
                        return [2 /*return*/, employees];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getAllEmployeesSchledule = function () {
        return __awaiter(this, void 0, void 0, function () {
            var employees, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userModel.find({}, { role: 1, workShift: 1 })];
                    case 1:
                        employees = _a.sent();
                        return [2 /*return*/, employees];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.updateEmployee = function (userLogin, updateFields, isAdmin) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, login, filteredUpdateFields, updatedEmployee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = updateFields._id, login = updateFields.login, filteredUpdateFields = __rest(updateFields, ["_id", "login"]);
                        // Hash password if it is present
                        if (filteredUpdateFields.password) {
                            filteredUpdateFields.password = utils_1.SecurityUtils.toSHA512(filteredUpdateFields.password);
                        }
                        // Remove role and active fields if the user is not admin
                        if (!isAdmin && 'role' in filteredUpdateFields) {
                            delete filteredUpdateFields.role;
                        }
                        if (!isAdmin && 'active' in filteredUpdateFields) {
                            delete filteredUpdateFields.active;
                        }
                        return [4 /*yield*/, models_1.UserModel.findOneAndUpdate({ login: userLogin }, { $set: filteredUpdateFields }, { new: true }).populate("role")];
                    case 1:
                        updatedEmployee = _a.sent();
                        return [2 /*return*/, updatedEmployee];
                }
            });
        });
    };
    AuthService.prototype.deleteUserByLogin = function (login) {
        return __awaiter(this, void 0, void 0, function () {
            var user, deletedUser, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.userModel.findOne({ login: login })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, false];
                        }
                        // End all sessions of the user
                        return [4 /*yield*/, this.sessionModel.deleteMany({ user: user._id })];
                    case 2:
                        // End all sessions of the user
                        _a.sent();
                        return [4 /*yield*/, this.userModel.findOneAndDelete({ login: login })];
                    case 3:
                        deletedUser = _a.sent();
                        return [2 /*return*/, deletedUser ? true : false];
                    case 4:
                        error_3 = _a.sent();
                        return [2 /*return*/, null];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map