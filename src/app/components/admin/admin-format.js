"use strict";
//EventFormats: EventFormat[];
//  FormatID: string;
//  FormatName: string;
//  Scenarios: string[];
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
var admin_service_1 = require("./../../shared/services/admin.service");
var AdminFormatComponent = /** @class */ (function () {
    function AdminFormatComponent(adminService) {
        this.adminService = adminService;
    }
    AdminFormatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAdmin()
            .then(function (data) { return _this.admin = data; });
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
//# sourceMappingURL=admin-format.js.map