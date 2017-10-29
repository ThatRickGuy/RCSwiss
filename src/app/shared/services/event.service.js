"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Event_1 = require("./../models/Event");
var EventService = /** @class */ (function () {
    function EventService() {
    }
    EventService.prototype.getEvent = function (id) {
        return new Promise(function (resolve, reject) {
            var event;
            event = new Event_1.Event();
            event.Load(id);
            resolve(event);
        });
    };
    EventService.prototype.GetEventList = function () {
        return new Promise(function (resolve, reject) {
            var valFromLS;
            valFromLS = localStorage.getItem("EventListItems");
            var EventListItems = JSON.parse(valFromLS);
            resolve(EventListItems);
        });
    };
    EventService = __decorate([
        core_1.Injectable()
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=Event.service.js.map