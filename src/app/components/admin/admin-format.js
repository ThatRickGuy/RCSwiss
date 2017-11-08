"use strict";
//EventFormats: EventFormat[];
//  FormatID: string;
//  FormatName: string;
//  Scenarios: string[];
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
var EventFormat_1 = require("./../../shared/models/EventFormat");
var admin_service_1 = require("./../../shared/services/admin.service");
var AdminFormatComponent = /** @class */ (function () {
    function AdminFormatComponent(adminService) {
        this.adminService = adminService;
        this.displayedColumns = ['name', 'scenarios', 'actions'];
    }
    AdminFormatComponent.prototype.ngOnInit = function () {
        this.loadFormats();
    };
    AdminFormatComponent.prototype.loadFormats = function () {
        var _this = this;
        this.adminService.getAdmin()
            .then(function (data) {
            _this.admin = data;
            _this.dataSource = new FormatDataSource(_this.admin.EventFormats);
        });
    };
    AdminFormatComponent.prototype.add = function () {
        this.admin.Factions.push();
        var format = new EventFormat_1.EventFormat();
        format.FormatName = this.NewFormatName;
        format.Scenarios = this.NewFormatScenarios.split(",");
        this.admin.EventFormats[this.admin.EventFormats.length] = format;
        this.admin.Save();
        this.loadFormats();
    };
    AdminFormatComponent.prototype.deleteRecord = function (formatID) {
        var target = this.admin.EventFormats.find(function (x) { return x.FormatID == formatID; });
        var index = this.admin.EventFormats.indexOf(target, 0);
        if (index > -1) {
            this.admin.EventFormats.splice(index, 1);
        }
        this.admin.Save();
        this.loadFormats();
    };
    AdminFormatComponent = __decorate([
        core_1.Component({
            selector: 'admin-format',
            templateUrl: './admin-format.html',
            styleUrls: ['./admin.css'],
            providers: [admin_service_1.AdminService]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService])
    ], AdminFormatComponent);
    return AdminFormatComponent;
}());
exports.AdminFormatComponent = AdminFormatComponent;
var FormatDataSource = /** @class */ (function (_super) {
    __extends(FormatDataSource, _super);
    function FormatDataSource(formats) {
        var _this = _super.call(this) || this;
        _this.formats = formats;
        return _this;
    }
    FormatDataSource.prototype.connect = function () {
        return Observable_1.Observable.of(this.formats);
    };
    FormatDataSource.prototype.disconnect = function () { };
    return FormatDataSource;
}(collections_1.DataSource));
exports.FormatDataSource = FormatDataSource;
//# sourceMappingURL=admin-format.js.map