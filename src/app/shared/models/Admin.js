"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.prototype.load = function () {
        var valFromLS;
        valFromLS = localStorage.getItem("Admin");
        var AdminData = JSON.parse(valFromLS);
        this.EventFormats = AdminData.EventFormats;
        this.Factions = AdminData.Factions;
        this.Metas = AdminData.Metas;
        this.Players = AdminData.Players;
    };
    Admin.prototype.Save = function () {
        var jsonString = JSON.stringify(this);
        localStorage.setItem("Admin", jsonString);
    };
    return Admin;
}());
exports.Admin = Admin;
//# sourceMappingURL=Admin.js.map