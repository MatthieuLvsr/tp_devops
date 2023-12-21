"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalModel = void 0;
var mongoose_1 = require("mongoose");
var animalSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    species: { type: String, required: true },
    age: { type: Number, required: true },
    enclosure: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Enclosure', required: true }
}, {
    collection: "animal",
    versionKey: false,
});
exports.AnimalModel = mongoose_1.default.model("Animal", animalSchema);
//# sourceMappingURL=animal.model.js.map