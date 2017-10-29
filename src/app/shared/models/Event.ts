import { GUID } from "./../Helpers/GUID";
import { EventListItem } from "./EventListItem";
import { EventFormat } from "./EventFormat";
import { Player } from "./Player";
import { EventPlayer } from "./EventPlayer";
import { Round } from "./Round";
import { Game } from "./Game";


export class Event {
    EventID: string;
    RCSwissVersion: number;
    Format?: EventFormat;
    Name: string;
    EventDate: Date;
    BestPaintedPlayerID?: string;
    BestSportPlayerID?: string;

    EventPlayers?: EventPlayer[];
    Rounds?: Round[];
    Games?: Game[];

    constructor() {
        this.EventID = GUID.newGuid();
        this.EventDate = new Date();
    }

    public Save() {
        this.RCSwissVersion = 0.1;
        let jsonString = JSON.stringify(this);
        localStorage.setItem(this.EventID, jsonString);

        //in addition to saving the event, we also need to save the abbreviated event list item. 
        //In order to do this we have to load the existing list from storage, 
        //see if this event is in it, and if so update/ insert it in the list, \
        //then save the list again.
        let valFromLS: string;
        valFromLS = localStorage.getItem("EventListItems");
        let EventListItems: EventListItem[] = JSON.parse(valFromLS);
        if (EventListItems)
        {
            //alert("List Exists");
            if (Object.keys(EventListItems).length > 0) {   // list has elements, find ours
                //alert("List has more than zero elements");
                let Found:boolean = false;

                for (let entry of EventListItems) {
                    if (entry.EventID == this.EventID)
                    {
                        //alert("List contains this event " + this.EventID);
                        Found=true;
                        //update values
                        entry.Name = this.Name;
                        entry.EventDate = this.EventDate;
                        //save
                        let jsonString = JSON.stringify(EventListItems);
                        localStorage.setItem("EventListItems", jsonString);
                        break;
                    }
                }
                if (!Found)
                {
                    //alert("List does NOT contain this event");
                    // list exists, ours isn't in it
                    EventListItems.push(new EventListItem());
                    EventListItems[Object.keys(EventListItems).length-1].EventID = this.EventID;
                    EventListItems[Object.keys(EventListItems).length-1].Name = this.Name;
                    EventListItems[Object.keys(EventListItems).length-1].EventDate = this.EventDate;
                    //save
                    let jsonString = JSON.stringify(EventListItems);
                    localStorage.setItem("EventListItems", jsonString);
                }

            }
            else {   // no elements, add this one
                //alert("List has no elements");
                EventListItems = new Array<EventListItem>();              
                EventListItems.push(new EventListItem());
                EventListItems[Object.keys(EventListItems).length-1].EventID = this.EventID;
                EventListItems[Object.keys(EventListItems).length-1].Name = this.Name;
                EventListItems[Object.keys(EventListItems).length-1].EventDate = this.EventDate;
                //save
                let jsonString = JSON.stringify(EventListItems);
                localStorage.setItem("EventListItems", jsonString);
            }
        }
        
        else {   // doesn't exist
            //alert("List does NOT exist");
            EventListItems = new Array<EventListItem>();              
            EventListItems.push(new EventListItem());
            EventListItems[Object.keys(EventListItems).length-1].EventID = this.EventID;
            EventListItems[Object.keys(EventListItems).length-1].Name = this.Name;
            EventListItems[Object.keys(EventListItems).length-1].EventDate = this.EventDate;
            //save
            let jsonString = JSON.stringify(EventListItems);
            localStorage.setItem("EventListItems", jsonString);
        }
    }

    Load(EventID: string) {
        let valFromLS: string;
        valFromLS = localStorage.getItem(EventID);
        let EventData: Event = JSON.parse(valFromLS);
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
    }

}
