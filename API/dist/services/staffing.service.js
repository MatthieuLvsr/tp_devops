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
exports.StaffingService = void 0;
var employee_model_1 = require("../models/employee.model");
var StaffingService = /** @class */ (function () {
    function StaffingService() {
    }
    StaffingService.prototype.isZooStaffed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentDay, currentTime, requiredStaff, workingHours, activeEmployees, _i, activeEmployees_1, employee, roleName, shifts, shiftToday, startHourMinutes, endHourMinutes, startDate, endDate, openingTime, closingTime, openingHour, closingHour;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentDay = new Date().toLocaleString('en-us', { weekday: 'long' }).toLowerCase();
                        currentTime = new Date();
                        requiredStaff = {
                            'receptionist': false,
                            'doctor': false,
                            'service_agent': false,
                            'seller': false,
                        };
                        workingHours = [];
                        return [4 /*yield*/, employee_model_1.UserModel.find({ active: true }).populate('role')];
                    case 1:
                        activeEmployees = _a.sent();
                        for (_i = 0, activeEmployees_1 = activeEmployees; _i < activeEmployees_1.length; _i++) {
                            employee = activeEmployees_1[_i];
                            roleName = employee.role.name.toLowerCase();
                            // Check if the employee's role is one of the required roles
                            if (Object.keys(requiredStaff).includes(roleName)) {
                                shifts = employee.workShift;
                                shiftToday = shifts.find(function (shift) { return shift.day === currentDay; });
                                if (shiftToday) {
                                    startHourMinutes = shiftToday.start.split(':').map(Number);
                                    endHourMinutes = shiftToday.end.split(':').map(Number);
                                    startDate = new Date();
                                    startDate.setHours(startHourMinutes[0], startHourMinutes[1]);
                                    endDate = new Date();
                                    endDate.setHours(endHourMinutes[0], endHourMinutes[1]);
                                    // Add the start and end times to the workingHours array
                                    workingHours.push({ start: startDate, end: endDate });
                                    // Mark the role as filled
                                    requiredStaff[roleName] = true;
                                }
                            }
                        }
                        // If all required roles are filled, check opening and closing times
                        if (Object.values(requiredStaff).every(function (role) { return role === true; })) {
                            openingTime = Math.max.apply(Math, workingHours.map(function (hours) { return hours.start.getTime(); }));
                            closingTime = Math.min.apply(Math, workingHours.map(function (hours) { return hours.end.getTime(); }));
                            openingHour = new Date(openingTime);
                            closingHour = new Date(closingTime);
                            // Check if the current time is before opening or after closing
                            if (currentTime.getTime() < openingTime) {
                                return [2 /*return*/, [false, "Zoo is not open yet. It will open at ".concat(openingHour.getHours(), ":").concat(openingHour.getMinutes() < 10 ? '0' + openingHour.getMinutes() : openingHour.getMinutes(), ".")]];
                            }
                            if (currentTime.getTime() > closingTime) {
                                return [2 /*return*/, [false, 'Zoo is closed for the day.']];
                            }
                            // If it's not before opening or after closing, the zoo is open
                            return [2 /*return*/, [true, "Zoo is open. It will close at ".concat(closingHour.getHours(), ":").concat(closingHour.getMinutes() < 10 ? '0' + closingHour.getMinutes() : closingHour.getMinutes(), ".")]];
                        }
                        // If not all required roles are filled, the zoo is not sufficiently staffed
                        return [2 /*return*/, [false, 'Zoo is not sufficiently staffed.']];
                }
            });
        });
    };
    return StaffingService;
}());
exports.StaffingService = StaffingService;
//# sourceMappingURL=staffing.service.js.map