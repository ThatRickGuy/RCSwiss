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
//Metas: Meta[];
//  MetaID: string;
//  Country: string;
//  Province: string;
//  City: string;
var Meta_1 = require("../../shared/models/Meta");
var core_1 = require("@angular/core");
var collections_1 = require("@angular/cdk/collections");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var admin_service_1 = require("./../../shared/services/admin.service");
var AdminMetaComponent = /** @class */ (function () {
    function AdminMetaComponent(adminService) {
        this.adminService = adminService;
        this.displayedColumns = ['name', 'country', 'state', 'city', 'actions'];
    }
    AdminMetaComponent.prototype.ngOnInit = function () {
        this.loadMetas();
    };
    AdminMetaComponent.prototype.loadMetas = function () {
        var _this = this;
        this.adminService.getAdmin()
            .then(function (data) {
            _this.admin = data;
            _this.dataSource = new MetaDataSource(_this.admin.Metas);
        });
    };
    AdminMetaComponent.prototype.add = function () {
        this.admin.Metas.push();
        var meta = new Meta_1.Meta();
        meta.Name = this.NewMetaName;
        meta.Country = this.NewMetaCountry;
        meta.State = this.NewMetaState;
        meta.City = this.NewMetaCity;
        this.admin.Metas[this.admin.Metas.length] = meta;
        this.admin.Save();
        this.loadMetas();
    };
    AdminMetaComponent.prototype.deleteRecord = function (metaID) {
        var target = this.admin.Metas.find(function (x) { return x.MetaID == metaID; });
        var index = this.admin.Metas.indexOf(target, 0);
        if (index > -1) {
            this.admin.Metas.splice(index, 1);
        }
        this.admin.Save();
        this.loadMetas();
    };
    AdminMetaComponent = __decorate([
        core_1.Component({
            selector: 'admin-meta',
            templateUrl: './admin-meta.html',
            styleUrls: ['./admin.css'],
            providers: [admin_service_1.AdminService]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService])
    ], AdminMetaComponent);
    return AdminMetaComponent;
}());
exports.AdminMetaComponent = AdminMetaComponent;
var MetaDataSource = /** @class */ (function (_super) {
    __extends(MetaDataSource, _super);
    function MetaDataSource(metas) {
        var _this = _super.call(this) || this;
        _this.metas = metas;
        return _this;
    }
    MetaDataSource.prototype.connect = function () {
        return Observable_1.Observable.of(this.metas);
    };
    MetaDataSource.prototype.disconnect = function () { };
    return MetaDataSource;
}(collections_1.DataSource));
exports.MetaDataSource = MetaDataSource;
//# sourceMappingURL=admin-meta.js.map