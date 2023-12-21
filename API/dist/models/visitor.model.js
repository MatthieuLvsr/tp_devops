"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorModel = void 0;
var mongoose_1 = require("mongoose");
var VisitorSchema = new mongoose_1.Schema({
    ticketId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Ticket',
        required: true,
    },
    currentEnclosureId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Enclosure',
        required: false,
    },
}, {
    collection: "visitors",
    versionKey: false,
});
exports.VisitorModel = mongoose_1.default.model("Visitor", VisitorSchema);
//# sourceMappingURL=visitor.model.js.map