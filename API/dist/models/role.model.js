"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = void 0;
var mongoose_1 = require("mongoose");
var roleSchema = new mongoose_1.Schema({
    name: { type: mongoose_1.Schema.Types.String, unique: true, required: true },
    updatable: { type: mongoose_1.Schema.Types.Boolean, required: true, default: true, immutable: true },
}, {
    collection: "roles",
    versionKey: false,
});
exports.RoleModel = mongoose_1.default.model("Role", roleSchema);
//# sourceMappingURL=role.model.js.map