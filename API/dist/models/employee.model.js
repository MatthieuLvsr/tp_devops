"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var WorkShiftSchema = new mongoose_1.Schema({
    day: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    start: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    end: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
}, {
    _id: false,
});
var userSchema = new mongoose_1.Schema({
    login: { type: mongoose_1.Schema.Types.String, unique: true, required: true },
    password: { type: mongoose_1.Schema.Types.String, required: true },
    role: { type: mongoose_1.Schema.Types.ObjectId, ref: "Role", required: true },
    active: { type: mongoose_1.Schema.Types.Boolean, required: true, default: true },
    workShift: [WorkShiftSchema],
}, {
    collection: "users",
    versionKey: false,
});
exports.UserModel = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=employee.model.js.map