"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateUser = exports.validateLoginUser = exports.validateCreateUser = exports.validateCreateRequest = exports.validateUpdateByNameRequest = exports.validateCreateAnimalRequest = exports.validateUpdateAnimalByNameRequest = void 0;
var utils_1 = require("../utils");
/* Animals */
function validateUpdateAnimalByNameRequest(req, res, next) {
    var name = req.params.name.trim().toLowerCase();
    if (!utils_1.ExpressUtils.isValid(res, name, 'string', 2, 50)) {
        return;
    }
    var _a = req.body, description = _a.description, image = _a.image, species = _a.species, age = _a.age, enclosure = _a.enclosure;
    // Trim and lowercase all string values and check if they are valid
    var trimmedDescription = description ? description.trim() : undefined;
    var trimmedImage = image ? image.trim() : undefined;
    var trimmedSpecies = species ? species.trim().toLowerCase() : undefined;
    var trimmedEnclosure;
    if (typeof enclosure == "string") {
        trimmedEnclosure = enclosure.trim();
    }
    else {
        trimmedEnclosure = enclosure ? enclosure.name.trim() : undefined;
    }
    if ((!description || utils_1.ExpressUtils.isValid(res, trimmedDescription, 'string', 0, 500)) &&
        (!image || utils_1.ExpressUtils.isImageUrlOrPath(trimmedImage)) &&
        (!species || utils_1.ExpressUtils.isValid(res, trimmedSpecies, 'string', 2, 30)) &&
        (!age || utils_1.ExpressUtils.isValid(res, age, 'number', 1, 150)) &&
        (!enclosure || utils_1.ExpressUtils.isValid(res, trimmedEnclosure, 'string', 2, 50))) {
        next();
    }
    else {
        utils_1.ExpressUtils.badRequest(res);
    }
}
exports.validateUpdateAnimalByNameRequest = validateUpdateAnimalByNameRequest;
function validateCreateAnimalRequest(req, res, next) {
    var _a = req.body, name = _a.name, description = _a.description, image = _a.image, species = _a.species, age = _a.age, enclosure = _a.enclosure;
    // Trim and lowercase all string values and check if they are valid
    var trimmedName = name ? name.trim().toLowerCase() : undefined;
    var trimmedDescription = description ? description.trim() : undefined;
    var trimmedImage = image ? image.trim() : undefined;
    var trimmedSpecies = species ? species.trim().toLowerCase() : undefined;
    var trimmedEnclosure = enclosure ? enclosure.trim() : undefined;
    if (utils_1.ExpressUtils.isValid(res, trimmedName, 'string', 2, 50) &&
        utils_1.ExpressUtils.isValid(res, trimmedDescription, 'string', 0, 500) &&
        utils_1.ExpressUtils.isImageUrlOrPath(trimmedImage) &&
        utils_1.ExpressUtils.isValid(res, trimmedSpecies, 'string', 2, 30) &&
        age && utils_1.ExpressUtils.isValid(res, age, 'number', 1, 150) &&
        utils_1.ExpressUtils.isValid(res, trimmedEnclosure, 'string', 2, 50)) {
        next();
    }
    else {
        utils_1.ExpressUtils.badRequest(res);
    }
}
exports.validateCreateAnimalRequest = validateCreateAnimalRequest;
/* Enclosures */
function validateUpdateByNameRequest(req, res, next) {
    var name = req.params.name.trim().toLowerCase();
    if (!utils_1.ExpressUtils.isValid(res, name, "string", 2, 50)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    var _a = req.body, description = _a.description, image = _a.image, type = _a.type, capacity = _a.capacity, openingHours = _a.openingHours, duration = _a.duration, status = _a.status, bestMaintenanceMonth = _a.bestMaintenanceMonth, handicapAccessible = _a.handicapAccessible;
    // Trim and lowercase all string values
    var trimmedDescription = description ? description.trim() : undefined;
    var trimmedImage = image ? image.trim() : undefined;
    var trimmedType = type ? type.trim().toLowerCase() : undefined;
    var trimmedOpeningHours = openingHours ? openingHours.trim() : undefined;
    if (description && !utils_1.ExpressUtils.isValid(res, trimmedDescription, "string", 0, 500)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (image && !utils_1.ExpressUtils.isImageUrlOrPath(trimmedImage)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (type && !utils_1.ExpressUtils.isValid(res, trimmedType, "string", 2, 30)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (capacity && !utils_1.ExpressUtils.isValid(res, capacity, "number", 1, 10000)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (openingHours && !utils_1.ExpressUtils.isValid(res, trimmedOpeningHours, "string", 11, 11)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (duration && !utils_1.ExpressUtils.isValid(res, duration, "number", 0, 1440)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (status !== undefined && !utils_1.ExpressUtils.isValid(res, status, "boolean")) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (bestMaintenanceMonth && !utils_1.ExpressUtils.isValid(res, bestMaintenanceMonth, "number", 1, 12)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (handicapAccessible !== undefined && !utils_1.ExpressUtils.isValid(res, handicapAccessible, "boolean")) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    next();
}
exports.validateUpdateByNameRequest = validateUpdateByNameRequest;
function validateCreateRequest(req, res, next) {
    var _a = req.body, name = _a.name, description = _a.description, image = _a.image, type = _a.type, capacity = _a.capacity, openingHours = _a.openingHours, duration = _a.duration, status = _a.status, bestMaintenanceMonth = _a.bestMaintenanceMonth, handicapAccessible = _a.handicapAccessible;
    // Trim and lowercase all string values
    var trimmedName = name ? name.trim().toLowerCase() : undefined;
    var trimmedDescription = description ? description.trim() : undefined;
    var trimmedImage = image ? image.trim() : undefined;
    var trimmedType = type ? type.trim().toLowerCase() : undefined;
    var trimmedOpeningHours = openingHours ? openingHours.trim() : undefined;
    if (!utils_1.ExpressUtils.isValid(res, trimmedName, "string", 2, 50)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (!utils_1.ExpressUtils.isValid(res, trimmedDescription, "string", 0, 500)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (!utils_1.ExpressUtils.isImageUrlOrPath(trimmedImage)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (!utils_1.ExpressUtils.isValid(res, trimmedType, "string", 2, 30)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (!capacity || !utils_1.ExpressUtils.isValid(res, capacity, "number", 1, 10000)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (!utils_1.ExpressUtils.isValid(res, trimmedOpeningHours, "string", 11, 11)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (!duration || !utils_1.ExpressUtils.isValid(res, duration, "number", 0, 1440)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (status === undefined || !utils_1.ExpressUtils.isValid(res, status, "boolean")) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (handicapAccessible === undefined || !utils_1.ExpressUtils.isValid(res, handicapAccessible, "boolean")) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (bestMaintenanceMonth && !utils_1.ExpressUtils.isValid(res, bestMaintenanceMonth, "number", 1, 12)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    next();
}
exports.validateCreateRequest = validateCreateRequest;
/* user */
function validateCreateUser(req, res, next) {
    var _a = req.body, login = _a.login, password = _a.password, role = _a.role, active = _a.active, workShift = _a.workShift;
    // Trim and lowercase some values
    var trimmedLogin = login ? login.trim().toLowerCase() : undefined;
    var trimmedPassword = password ? password.trim() : undefined;
    var trimmedRole = role ? role.trim().toLowerCase() : undefined;
    var isDeclaredActive = active !== undefined ? active : true; // default: true if not declared
    if (!utils_1.ExpressUtils.isValid(res, trimmedLogin, "string", 4, 30)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (!utils_1.ExpressUtils.isValid(res, trimmedPassword, "string", 8)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (!trimmedRole || !utils_1.ExpressUtils.isValid(res, trimmedRole, "string", 2, 30)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (!utils_1.ExpressUtils.isValid(res, isDeclaredActive, "boolean")) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    // Check if workShift is an array of 3 elements and if each element is valid
    if (!workShift || !utils_1.ExpressUtils.isValid(res, workShift, "array", 1, 7)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    var trimmedWorkShift = workShift.map(function (shift) {
        return {
            day: shift.day.trim().toLowerCase(),
            start: shift.start.trim(),
            end: shift.end.trim(),
        };
    });
    var isValidShift = trimmedWorkShift.every(function (shift) {
        var validDaysOfWeek = /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/;
        var isValidDay = validDaysOfWeek.test(shift.day);
        return (isValidDay &&
            utils_1.ExpressUtils.isValid(res, shift.start, "string", 5, 5) &&
            utils_1.ExpressUtils.isValid(res, shift.end, "string", 5, 5));
    });
    if (!isValidShift) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    next();
}
exports.validateCreateUser = validateCreateUser;
function validateLoginUser(req, res, next) {
    var _a = req.body, login = _a.login, password = _a.password;
    // Trim and lowercase some values and check if they are valid
    var trimmedLogin = login ? login.trim().toLowerCase() : undefined;
    var trimmedPassword = password ? password.trim() : undefined;
    if (utils_1.ExpressUtils.isValid(res, trimmedLogin, "string", 4, 30) &&
        utils_1.ExpressUtils.isValid(res, trimmedPassword, "string", 8)) {
        next();
    }
    else {
        utils_1.ExpressUtils.badRequest(res);
    }
}
exports.validateLoginUser = validateLoginUser;
function validateUpdateUser(req, res, next) {
    var login = req.params.login.trim().toLowerCase();
    if (!utils_1.ExpressUtils.isValid(res, login, "string", 4, 30)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    var _a = req.body, password = _a.password, role = _a.role, active = _a.active, workShift = _a.workShift;
    // Trim and lowercase some values and check if they are valid
    var trimmedPassword = password.trim();
    var trimmedRole = role ? role.trim().toLowerCase() : undefined;
    var isDeclaredActive = active !== undefined ? active : true; // default: true if not declared
    var trimmedWorkShift = workShift
        ? workShift.map(function (shift) {
            return {
                day: shift.day.trim().toLowerCase(),
                start: shift.start.trim(),
                end: shift.end.trim(),
            };
        })
        : undefined;
    if (!utils_1.ExpressUtils.isValid(res, trimmedPassword, "string", 8)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (role && !utils_1.ExpressUtils.isValid(res, trimmedRole, "string", 2, 30)) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    if (active && !utils_1.ExpressUtils.isValid(res, isDeclaredActive, "boolean")) {
        utils_1.ExpressUtils.badRequest(res);
        return;
    }
    console.log(workShift);
    if (workShift && trimmedWorkShift) {
        if (!utils_1.ExpressUtils.isValid(res, trimmedWorkShift, "array", 1, 7)) {
            utils_1.ExpressUtils.badRequest(res);
            return;
        }
        for (var _i = 0, trimmedWorkShift_1 = trimmedWorkShift; _i < trimmedWorkShift_1.length; _i++) {
            var shift = trimmedWorkShift_1[_i];
            var validDaysOfWeek = /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/;
            var isValidDay = validDaysOfWeek.test(shift.day);
            if (!isValidDay ||
                !utils_1.ExpressUtils.isValid(res, shift.start, "string", 5, 5) ||
                !utils_1.ExpressUtils.isValid(res, shift.end, "string", 5, 5)) {
                utils_1.ExpressUtils.badRequest(res);
                return;
            }
        }
    }
    next();
}
exports.validateUpdateUser = validateUpdateUser;
//# sourceMappingURL=valid.middleware.js.map