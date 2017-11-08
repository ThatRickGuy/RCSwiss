import { GUID } from "./../Helpers/GUID";

export class Meta {
    MetaID: string;
    Name: string;
    Country: string;
    State: string;
    City: string;

    constructor() {
        this.MetaID = GUID.newGuid();
    }
}

