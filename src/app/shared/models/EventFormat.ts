import { GUID } from "./../Helpers/GUID";


export   class EventFormat {
        FormatID: string;
        FormatName: string;
        Scenarios: string[];

        constructor() {
            this.FormatID = GUID.newGuid();
        }
    }
 