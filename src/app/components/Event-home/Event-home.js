"use strict";
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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var Event_service_1 = require("./../../shared/services/Event.service");
var Event_1 = require("./../../shared/models/Event");
var router_2 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var EventHomeComponent = /** @class */ (function () {
    function EventHomeComponent(EventService, route, location, router) {
        this.EventService = EventService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    EventHomeComponent.prototype.save = function () {
        this.Event.Save();
    };
    EventHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.EventService.getEvent(params.get('id')); })
            .subscribe(function (data) { return _this.Event = data; });
        if (this.Event) {
            // exists, do nothing
        }
        else {
            if (this.route.snapshot.paramMap.get('id')) {
                //alert("Load This: " + this.route.snapshot.paramMap.get('id'));
                this.EventService.getEvent(this.route.snapshot.paramMap.get('id')).then(function (data) { return _this.Event = data; });
            }
            else {
                //alert("new event, create");
                this.Event = new Event_1.Event();
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Event_1.Event)
    ], EventHomeComponent.prototype, "Event", void 0);
    EventHomeComponent = __decorate([
        core_1.Component({
            selector: 'Event-home',
            templateUrl: './Event-home.html',
            styleUrls: ['./Event-home.css'],
            providers: [Event_service_1.EventService]
        }),
        __metadata("design:paramtypes", [Event_service_1.EventService,
            router_1.ActivatedRoute,
            common_1.Location,
            router_2.Router])
    ], EventHomeComponent);
    return EventHomeComponent;
}());
exports.EventHomeComponent = EventHomeComponent;
//# sourceMappingURL=Event-home.js.map