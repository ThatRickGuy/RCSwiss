import { GUID } from "./../Helpers/GUID";

export class Player
{
    PlayerID: string;
    PlayerName: string;
    DefaultPlayerFactionID: string;
    MetaID: string;

    constructor() {
        this.PlayerID = GUID.newGuid();
    }
}
