"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GUID_1 = require("./../Helpers/GUID");
var EventListItem_1 = require("./EventListItem");
var Event = /** @class */ (function () {
    function Event() {
        this.EventID = GUID_1.GUID.newGuid();
        this.EventDate = new Date();
    }
    Event.prototype.Save = function () {
        this.RCSwissVersion = 0.1;
        var jsonString = JSON.stringify(this);
        localStorage.setItem(this.EventID, jsonString);
        //in addition to saving the event, we also need to save the abbreviated event list item. 
        //In order to do this we have to load the existing list from storage, 
        //see if this event is in it, and if so update/ insert it in the list, \
        //then save the list again.
        var valFromLS;
        valFromLS = localStorage.getItem("EventListItems");
        var EventListItems = JSON.parse(valFromLS);
        if (EventListItems) {
            //alert("List Exists");
            if (Object.keys(EventListItems).length > 0) {
                //alert("List has more than zero elements");
                var Found = false;
                for (var _i = 0, EventListItems_1 = EventListItems; _i < EventListItems_1.length; _i++) {
                    var entry = EventListItems_1[_i];
                    if (entry.EventID == this.EventID) {
                        //alert("List contains this event " + this.EventID);
                        Found = true;
                        //update values
                        entry.Name = this.Name;
                        entry.EventDate = this.EventDate;
                        //save
                        var jsonString_1 = JSON.stringify(EventListItems);
                        localStorage.setItem("EventListItems", jsonString_1);
                        break;
                    }
                }
                if (!Found) {
                    //alert("List does NOT contain this event");
                    // list exists, ours isn't in it
                    EventListItems.push(new EventListItem_1.EventListItem());
                    EventListItems[Object.keys(EventListItems).length - 1].EventID = this.EventID;
                    EventListItems[Object.keys(EventListItems).length - 1].Name = this.Name;
                    EventListItems[Object.keys(EventListItems).length - 1].EventDate = this.EventDate;
                    //save
                    var jsonString_2 = JSON.stringify(EventListItems);
                    localStorage.setItem("EventListItems", jsonString_2);
                }
            }
            else {
                //alert("List has no elements");
                EventListItems = new Array();
                EventListItems.push(new EventListItem_1.EventListItem());
                EventListItems[Object.keys(EventListItems).length - 1].EventID = this.EventID;
                EventListItems[Object.keys(EventListItems).length - 1].Name = this.Name;
                EventListItems[Object.keys(EventListItems).length - 1].EventDate = this.EventDate;
                //save
                var jsonString_3 = JSON.stringify(EventListItems);
                localStorage.setItem("EventListItems", jsonString_3);
            }
        }
        else {
            //alert("List does NOT exist");
            EventListItems = new Array();
            EventListItems.push(new EventListItem_1.EventListItem());
            EventListItems[Object.keys(EventListItems).length - 1].EventID = this.EventID;
            EventListItems[Object.keys(EventListItems).length - 1].Name = this.Name;
            EventListItems[Object.keys(EventListItems).length - 1].EventDate = this.EventDate;
            //save
            var jsonString_4 = JSON.stringify(EventListItems);
            localStorage.setItem("EventListItems", jsonString_4);
        }
    };
    Event.prototype.Load = function (EventID) {
        var valFromLS;
        valFromLS = localStorage.getItem(EventID);
        var EventData = JSON.parse(valFromLS);
        this.EventID = EventData.EventID;
        this.BestPaintedPlayerID = EventData.BestPaintedPlayerID;
        this.BestSportPlayerID = EventData.BestSportPlayerID;
        this.EventDate = EventData.EventDate;
        this.EventPlayers = EventData.EventPlayers;
        this.Format = EventData.Format;
        this.Games = EventData.Games;
        this.Name = EventData.Name;
        this.RCSwissVersion = EventData.RCSwissVersion;
        this.Rounds = EventData.Rounds;
    };
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=Event.js.map