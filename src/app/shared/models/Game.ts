import { GUID } from "./../Helpers/GUID";

export class Game {
    GameID: string;
    RoundID: string;
    Player1ID: string;
    Player2ID: string;
    WinnerPlayerID: string;
    Condition: string;
    TableNumber: number;
    IsPairdown: boolean;
    IsReported: boolean;
    PairingCondition: number;

    constructor() {
        this.GameID = GUID.newGuid();
    }
}

