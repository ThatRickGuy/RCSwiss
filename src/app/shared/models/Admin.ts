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
        this.EventFormats = AdminData.EventFormats;
        this.Factions = AdminData.Factions;
        this.Metas = AdminData.Metas;
        this.Players = AdminData.Players;
    }

    Save()
    {
        let jsonString = JSON.stringify(this);
        localStorage.setItem("Admin", jsonString);
    }
}