import { GUID } from "./../Helpers/GUID";

export class Meta {
    MetaID: string;
    Country: string;
    Province: string;
    City: string;

    constructor() {
        this.MetaID = GUID.newGuid();
    }
}

