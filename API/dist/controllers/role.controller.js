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
exports.RoleController = void 0;
var utils_1 = require("../utils");
var services_1 = require("../services");
var express = require("express");
var middlewares_1 = require("../middlewares");
var RoleController = /** @class */ (function () {
    function RoleController() {
        this.path = "/role";
        this.roleService = new services_1.RoleService();
    }
    /** [POST] **/
    /* Create role */
    RoleController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, trimmedName, role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.body.name;
                        trimmedName = name.trim().toLowerCase();
                        if (!name || name.length < 3 || name.length > 20) {
                            utils_1.ExpressUtils.badRequest(res);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.roleService.createRole({
                                name: trimmedName,
                            })];
                    case 1:
                        role = _a.sent();
                        role ? res.json(role) : utils_1.ExpressUtils.conflict(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [GET] **/
    /* Get all roles */
    RoleController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.roleService.getAllRoles()];
                    case 1:
                        roles = _a.sent();
                        roles ? res.json(roles) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Get role by name */
    RoleController.prototype.getByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, trimmedName, role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.params.name;
                        trimmedName = name.trim().toLowerCase();
                        if (!name || name.length < 3 || name.length > 20) {
                            utils_1.ExpressUtils.badRequest(res);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.roleService.getRoleByName(trimmedName)];
                    case 1:
                        role = _a.sent();
                        role ? res.json(role) : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [PATCH] **/
    /* Update role by name */
    RoleController.prototype.updateByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, newName, trimmedName, trimmedNewName, role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.params.name;
                        newName = req.body.newName;
                        trimmedName = name.trim().toLowerCase();
                        trimmedNewName = newName.trim().toLowerCase();
                        if (!trimmedNewName ||
                            trimmedNewName.length < 3 ||
                            trimmedNewName.length > 20) {
                            utils_1.ExpressUtils.badRequest(res);
                            return [2 /*return*/];
                        }
                        if (trimmedName === trimmedNewName) {
                            utils_1.ExpressUtils.badRequest(res);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.roleService.updateRoleByName(trimmedName, {
                                name: trimmedNewName,
                            })];
                    case 1:
                        role = _a.sent();
                        /* If role is not found, it doesn't make sense because we already check that in the middleware.
                        So it means another role already has the unique name we wanted to give (conflict). */
                        role ? res.json(role) : utils_1.ExpressUtils.conflict(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /** [DELETE] **/
    /* Delete role by name */
    RoleController.prototype.deleteByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name, trimmedName, changeRole, role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = req.params.name;
                        trimmedName = name.trim().toLowerCase();
                        if (!name || name.length < 3 || name.length > 20) {
                            utils_1.ExpressUtils.badRequest(res);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.roleService.reassignUsers(trimmedName, 'user')];
                    case 1:
                        changeRole = _a.sent();
                        if (changeRole === false) {
                            utils_1.ExpressUtils.notFound(res);
                            return [2 /*return*/];
                        }
                        else if (changeRole === null) {
                            utils_1.ExpressUtils.internalServerError(res);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.roleService.deleteRoleByName(trimmedName)];
                    case 2:
                        role = _a.sent();
                        role ? res.json() : utils_1.ExpressUtils.notFound(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    /* Router */
    RoleController.prototype.buildRoutes = function () {
        var router = express.Router();
        router.post("/create", express.json(), (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRole)(['admin']), this.create.bind(this));
        router.get("/", (0, middlewares_1.checkAuthToken)(), this.getAll.bind(this));
        router.get("/:name", (0, middlewares_1.checkAuthToken)(), this.getByName.bind(this));
        router.patch("/:name", express.json(), (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRole)(['admin']), (0, middlewares_1.checkUpdatableRole)(this.roleService), this.updateByName.bind(this));
        router.delete("/:name", (0, middlewares_1.checkAuthToken)(), (0, middlewares_1.checkRole)(['admin']), (0, middlewares_1.checkUpdatableRole)(this.roleService), this.deleteByName.bind(this));
        return router;
    };
    return RoleController;
}());
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map