"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketModel = exports.TicketType = void 0;
var mongoose_1 = require("mongoose");
var TicketType;
(function (TicketType) {
    TicketType["DAY"] = "day";
    TicketType["WEEKEND"] = "weekend";
    TicketType["ANNUAL"] = "annual";
    TicketType["ONE_DAY_PER_MONTH"] = "one_day_per_month";
    TicketType["ESCAPE_GAME"] = "escape_game";
})(TicketType || (exports.TicketType = TicketType = {}));
var TicketSchema = new mongoose_1.Schema({
    type: {
        type: mongoose_1.Schema.Types.String,
        enum: Object.values(TicketType),
        required: true,
    },
    validEnclosures: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Enclosure',
            required: true,
        },
    ],
    escapeGameOrder: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Enclosure',
        },
    ],
    firstName: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    lastName: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    validity: {
        type: mongoose_1.Schema.Types.Date,
        required: true,
    },
}, {
    collection: "tickets",
    versionKey: false,
});
exports.TicketModel = mongoose_1.default.model("Ticket", TicketSchema);
//# sourceMappingURL=ticket.model.js.map