"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionModel = void 0;
var mongoose_1 = require("mongoose");
var sessionSchema = new mongoose_1.Schema({
    platform: {
        type: mongoose_1.Schema.Types.String
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    collection: 'sessions',
    versionKey: false
});
exports.SessionModel = mongoose_1.default.model('Session', sessionSchema);
//# sourceMappingURL=session.model.js.map