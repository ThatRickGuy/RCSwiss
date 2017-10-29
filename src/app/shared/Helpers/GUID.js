"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GUID = /** @class */ (function () {
    function GUID() {
    }
    GUID.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return GUID;
}());
exports.GUID = GUID;
//# sourceMappingURL=GUID.js.map