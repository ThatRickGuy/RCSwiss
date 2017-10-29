import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { EventService } from './../../shared/services/Event.service';
import { Event } from './../../shared/models/Event';
import { EventListItem } from './../../shared/models/EventListItem';
import 'rxjs/add/operator/switchMap';
import { Router }   from '@angular/router';

@Component({
  selector: 'Events',
  templateUrl: './Events.html',
  styleUrls: ['./Events.css'],
  providers: [EventService]
})
export class EventsComponent implements OnInit {
    constructor(
      private EventService: EventService,
      private route: ActivatedRoute,
      private location: Location,
      private router: Router,
    ) {}


    EventList: EventListItem[];
    SelectedEvent: EventListItem;

    goBack(): void {
      this.location.back();
    }

    ngOnInit(): void {
        this.EventService.GetEventList().then(Data=>{this.EventList = Data;});
    }
    
    onSelect(SelectedEvent: EventListItem): void {
      this.SelectedEvent = SelectedEvent;
      this.router.navigate(['/event', this.SelectedEvent.EventID]);
    }
}



