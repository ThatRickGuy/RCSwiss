import { Injectable } from '@angular/core';
import { Event } from './../models/Event';
import {EventListItem} from './../models/EventListItem';

@Injectable()
export class EventService {
    public getEvent(id: string): Promise<Event> {
        return new Promise<Event>((resolve, reject) => {
            let valFromLS: string;
            valFromLS = localStorage.getItem(id);
            let Event: Event = JSON.parse(valFromLS);
            resolve(Event);
        } );        
    }

    public GetEventList(): Promise<EventListItem[]> {
        return new Promise<EventListItem[]>((resolve, reject) =>{
            let valFromLS: string;
            valFromLS = localStorage.getItem("EventListItems");
            let EventListItems: EventListItem[] = JSON.parse(valFromLS);
            resolve(EventListItems);
        });        
    }

}