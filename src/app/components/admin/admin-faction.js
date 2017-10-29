"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var Faction_1 = require("./../../shared/models/Faction");
var admin_service_1 = require("./../../shared/services/admin.service");
/**
 * @title Basic table
 */
var AdminFactionComponent = /** @class */ (function () {
    function AdminFactionComponent(adminService) {
        this.adminService = adminService;
        this.displayedColumns = ['name', 'actions'];
    }
    AdminFactionComponent.prototype.ngOnInit = function () {
        this.loadFactions();
    };
    AdminFactionComponent.prototype.loadFactions = function () {
        var _this = this;
        this.adminService.getAdmin()
            .then(function (data) {
            _this.admin = data;
            _this.dataSource = new FactionDataSource(_this.admin.Factions);
        });
    };
    AdminFactionComponent.prototype.add = function () {
        alert(this.NewFaction);
        this.admin.Factions.push();
        var faction = new Faction_1.Faction();
        faction.Name = this.NewFaction;
        this.admin.Factions[this.admin.Factions.length] = faction;
        this.admin.Save();
        this.loadFactions();
    };
    AdminFactionComponent.prototype.deletRecord = function (factionID) {
        var target = this.admin.Factions.find(function (x) { return x.FactionID == factionID; });
        var index = this.admin.Factions.indexOf(target, 0);
        if (index > -1) {
            this.admin.Factions.splice(index, 1);
        }
        this.admin.Save();
        this.loadFactions();
    };
    AdminFactionComponent = __decorate([
        core_1.Component({
            selector: 'admin-faction',
            styleUrls: ['./admin.css'],
            templateUrl: './admin-faction.html',
            providers: [admin_service_1.AdminService]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService])
    ], AdminFactionComponent);
    return AdminFactionComponent;
}());
exports.AdminFactionComponent = AdminFactionComponent;
var FactionDataSource = /** @class */ (function (_super) {
    __extends(FactionDataSource, _super);
    function FactionDataSource(factions) {
        var _this = _super.call(this) || this;
        _this.factions = factions;
        return _this;
    }
    FactionDataSource.prototype.connect = function () {
        return Observable_1.Observable.of(this.factions);
    };
    FactionDataSource.prototype.disconnect = function () { };
    return FactionDataSource;
}(collections_1.DataSource));
exports.FactionDataSource = FactionDataSource;
//# sourceMappingURL=admin-faction.js.map