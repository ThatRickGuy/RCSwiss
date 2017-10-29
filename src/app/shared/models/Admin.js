"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.prototype.load = function () {
        var valFromLS;
        valFromLS = localStorage.getItem("Admin");
        var AdminData = JSON.parse(valFromLS);
        if (!AdminData) {
            this.EventFormats = new Array();
            this.Factions = new Array();
            this.Metas = new Array();
            this.Players = new Array();
        }
        else {
            this.EventFormats = AdminData.EventFormats;
            if (!this.EventFormats)
                this.EventFormats = new Array();
            this.Factions = AdminData.Factions;
            if (!this.Factions)
                this.Factions = new Array();
            this.Metas = AdminData.Metas;
            if (!this.Metas)
                this.Metas = new Array();
            this.Players = AdminData.Players;
            if (!this.Players)
                this.Players = new Array();
        }
    };
    Admin.prototype.Save = function () {
        var jsonString = JSON.stringify(this);
        localStorage.setItem("Admin", jsonString);
    };
    return Admin;
}());
exports.Admin = Admin;
//# sourceMappingURL=Admin.js.map