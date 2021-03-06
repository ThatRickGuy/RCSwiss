"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app/app.component");
var admin_1 = require("./components/admin/admin");
var admin_faction_1 = require("./components/admin/admin-faction");
var admin_format_1 = require("./components/admin/admin-format");
var admin_meta_1 = require("./components/admin/admin-meta");
var Events_1 = require("./components/Events/Events");
var Event_detail_1 = require("./components/Event-detail/Event-detail");
var Event_home_1 = require("./components/Event-home/Event-home");
var home_1 = require("./components/Home/home");
var Event_service_1 = require("./shared/services/Event.service");
var Admin_service_1 = require("./shared/services/Admin.service");
var app_routes_1 = require("./app.routes");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var table_1 = require("@angular/material/table");
var table_2 = require("@angular/cdk/table");
//import { MatButtonModule } from '@angular/material';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routes_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatCardModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                table_1.MatTableModule,
                table_2.CdkTableModule,
            ],
            // exports: [MatButtonModule, MatCheckboxModule],
            declarations: [
                app_component_1.AppComponent,
                admin_1.AdminComponent,
                admin_faction_1.AdminFactionComponent,
                admin_format_1.AdminFormatComponent,
                admin_meta_1.AdminMetaComponent,
                Events_1.EventsComponent,
                Event_detail_1.EventDetailComponent,
                Event_home_1.EventHomeComponent,
                home_1.HomeComponent
            ],
            providers: [
                Event_service_1.EventService,
                Admin_service_1.AdminService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map