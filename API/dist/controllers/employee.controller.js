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
exports.UserController = void 0;
var express = require("express");
var services_1 = require("../services");
var utils_1 = require("../utils");
var middlewares_1 = require("../middlewares");
var models_1 = require("../models");
var UserController = /** @class */ (function () {
    function UserController() {
        this.path = "/auth";
        this.authService = new services_1.AuthService();
    }
    /** [POST] **/
    /* Create a new user */
    UserController.prototype.subscribe = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, login, password, role, active, workShift, trimmedLogin, trimmedPassword, trimmedRole, trimmedWorkShift, roleExists, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, login = _a.login, password = _a.password, role = _a.role, active = _a.active, workShift = _a.workShift;
                        trimmedLogin = login.trim().toLowerCase();
                        trimmedPassword = password.trim();
                        trimmedRole = role.trim().toLowerCase();
                        trimmedWorkShift = workShift.map(function (shift) {
                            return {
                                day: shift.day.trim().toLowerCase(),
                                start: shift.start.trim(),
                                end: shift.end.trim(),
                            };
                        });
                        return [4 /*yield*/, models_1.RoleModel.findOne({ name: trimmedRole })];
                    case 1:
                        roleExists = _b.sent();
                        if (!roleExists) {
                            return [2 /*return*/, utils_1.ExpressUtils.conflict(res)];
                        }
                        return [4 /*yield*/, this.authService.createUser({
                                login: trimmedLogin,
                                password: trimmedPassword,
                                role: roleExists._id,
                                active: active,
                                workShift: trimmedWorkShift,
                            })];
                    case 2:
                        user = _b.sent();
                        user ? res.json(user) : utils_1.ExpressUtils.conflict(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Login */
    UserController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, platform, session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.findUserLogin({
                            login: req.body.login,
                            password: req.body.password,
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, utils_1.ExpressUtils.unauthorized(res)];
                        }
                        platform = req.headers["user-agent"];
                        return [4 /*yield*/, this.authService.startSession(user, platform)];
                    case 2:
                        session = _a.sent();
                        session ? res.json(session) : utils_1.ExpressUtils.internalServerError(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Logout */
    UserController.prototype.logout = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, parts, token, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authorization = req.headers.authorization;
                        if (!authorization) {
                            return [2 /*return*/, utils_1.ExpressUtils.unauthorized(res)];
                        }
                        parts = authorization.split(" ");
                        token = parts[1];
                        if (!token) {
                            return [2 /*return*/, utils_1.ExpressUtils.unauthorized(res)];
                        }
                        return [4 /*yield*/, this.authService.endSession(token)];
                    case 1:
                        success = _a.sent();
                        success
                            ? res.status(200).json({ message: "Logout successful" })
                            : utils_1.ExpressUtils.internalServerError(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [GET] **/
    /* Get current user */
    UserController.prototype.me = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                res.json(req.user);
                return [2 /*return*/];
            });
        });
    };
    /* Get all employees */
    UserController.prototype.employees = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employees;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getAllEmployees()];
                    case 1:
                        employees = _a.sent();
                        employees ? res.json(employees) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Get all employees schledule */
    UserController.prototype.employeesSchedule = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var employees;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getAllEmployeesSchledule()];
                    case 1:
                        employees = _a.sent();
                        employees ? res.json(employees) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [PATCH] **/
    /* Update an employee */
    UserController.prototype.updateByLogin = function (req, res) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var login, _d, password, role, active, workShift, trimmedLogin, trimmedRole, roleExists, isAdmin, updatedEmployee;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        login = req.params.login;
                        _d = req.body, password = _d.password, role = _d.role, active = _d.active, workShift = _d.workShift;
                        trimmedLogin = login.trim().toLowerCase();
                        trimmedRole = role.trim().toLowerCase();
                        return [4 /*yield*/, models_1.RoleModel.findOne({ name: trimmedRole })];
                    case 1:
                        roleExists = _e.sent();
                        if (!roleExists) {
                            return [2 /*return*/, utils_1.ExpressUtils.conflict(res)];
                        }
                        // Check if the request is made by an admin or the user himself
                        if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role.name) !== "admin" && ((_b = req.user) === null || _b === void 0 ? void 0 : _b.login) !== trimmedLogin) {
                            return [2 /*return*/, utils_1.ExpressUtils.unauthorized(res)];
                        }
                        isAdmin = ((_c = req.user) === null || _c === void 0 ? void 0 : _c.role.name) === "admin";
                        return [4 /*yield*/, this.authService.updateEmployee(trimmedLogin, {
                                password: password,
                                role: roleExists._id,
                                active: active,
                                workShift: workShift,
                            }, isAdmin)];
                    case 2:
                        updatedEmployee = _e.sent();
                        updatedEmployee ? res.json(updatedEmployee) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [DELETE] **/
    /* Delete an employee */
    UserController.prototype.deleteByLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var login, deletedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        login = req.params.login.trim().toLowerCase();
                        if (!utils_1.ExpressUtils.isValid(res, login, "string", 4, 30)) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.authService.deleteUserByLogin(login)];
                    case 1:
                        deletedUser = _a.sent();
                        deletedUser ? utils_1.ExpressUtils.noContent(res) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.buildRoutes = function () {
        var router = express.Router();
        router.get("/me", (0, middlewares_1.checkAuthToken)(), this.me.bind(this));
        router.get("/employees", (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRole)(['admin']), this.employees.bind(this));
        router.get("/employees/schledule", (0, middlewares_1.checkAuthToken)(), this.employeesSchedule.bind(this));
        router.post("/subscribe", express.json(), middlewares_1.validateCreateUser, this.subscribe.bind(this));
        router.post("/login", express.json(), this.login.bind(this));
        router.post("/logout", (0, middlewares_1.checkAuthToken)(), this.logout.bind(this));
        router.patch("/employees/:login", express.json(), (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRoleOrSelf)(['admin']), middlewares_1.validateUpdateUser, this.updateByLogin.bind(this));
        router.delete("/employees/:login", (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRoleOrSelf)(['admin']), this.deleteByLogin.bind(this));
        return router;
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=employee.controller.js.map