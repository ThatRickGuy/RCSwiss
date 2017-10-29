import { GUID } from "./../Helpers/GUID";

export class Faction {
    FactionID: string;
    Name: string;
    
    constructor() {
        this.FactionID = GUID.newGuid();
    }
}

