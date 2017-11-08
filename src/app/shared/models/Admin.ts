import { EventFormat } from "./EventFormat";
import { Faction } from "./Faction";
import { Meta } from "./Meta";
import { Player } from "./Player";

export class Admin {
    Factions: Faction[];
    Metas: Meta[];
    EventFormats: EventFormat[];
    Players: Player[];

    load()
    {
        let valFromLS: string;
        valFromLS = localStorage.getItem("Admin");
        let AdminData: Admin = JSON.parse(valFromLS);
        if (!AdminData){
            this.EventFormats = new Array<EventFormat>();
            this.Factions = new Array<Faction>();
            this.Metas = new Array<Meta>();
            this.Players = new Array<Player>();
        }
        else {
            this.EventFormats = AdminData.EventFormats;
            if (!this.EventFormats) this.EventFormats = new Array<EventFormat>();
            this.Factions = AdminData.Factions;
            if (!this.Factions) this.Factions = new Array<Faction>();
            this.Metas = AdminData.Metas;
            if (!this.Metas) this.Metas = new Array<Meta>();
            this.Players = AdminData.Players;
            if (!this.Players) this.Players = new Array<Player>();
        }
    
    }

    Save()
    {
        let jsonString = JSON.stringify(this);
        localStorage.setItem("Admin", jsonString);
    }
}