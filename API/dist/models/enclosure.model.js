"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnclosureModel = void 0;
var mongoose_1 = require("mongoose");
var enclosureSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    capacity: { type: Number, required: true },
    openingHours: { type: String, required: true },
    duration: { type: Number, required: true },
    status: { type: Boolean, required: true },
    bestMaintenanceMonth: { type: Number, required: false },
    handicapAccessible: { type: Boolean, required: true },
    animals: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Animal' }]
}, {
    collection: "enclosures",
    versionKey: false,
});
exports.EnclosureModel = mongoose_1.default.model("Enclosure", enclosureSchema);
//# sourceMappingURL=enclosure.model.js.map