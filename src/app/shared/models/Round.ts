import { GUID } from "./../Helpers/GUID";

export class Round {
    RoundID: string;
    EventID: string;
    Sequence: number;
    Scenario: string;
    Size: number;
    IsFinalRound: boolean;

    constructor() {
        this.RoundID = GUID.newGuid();
    }
}

