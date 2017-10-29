"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_1 = require("./components/Home/home");
var Events_1 = require("./components/Events/Events");
var Event_detail_1 = require("./components/Event-detail/Event-detail");
var Event_home_1 = require("./components/Event-home/Event-home");
var admin_1 = require("./components/admin/admin");
var admin_faction_1 = require("./components/admin/admin-faction");
var admin_format_1 = require("./components/admin/admin-format");
var admin_meta_1 = require("./components/admin/admin-meta");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'admin', component: admin_1.AdminComponent },
    { path: 'admin-faction', component: admin_faction_1.AdminFactionComponent },
    { path: 'admin-format', component: admin_format_1.AdminFormatComponent },
    { path: 'admin-meta', component: admin_meta_1.AdminMetaComponent },
    { path: 'events', component: Events_1.EventsComponent },
    { path: 'event/:id', component: Event_detail_1.EventDetailComponent },
    { path: 'event', component: Event_detail_1.EventDetailComponent },
    { path: 'event/:id/home', component: Event_home_1.EventHomeComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routes.js.map