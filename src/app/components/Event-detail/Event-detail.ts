import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { EventService } from './../../shared/services/Event.service';
import { Event } from './../../shared/models/Event';
import { Router }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'Event-detail',
  templateUrl: './Event-detail.html',
  styleUrls: ['./Event-detail.css'],
  providers: [EventService]
})
export class EventDetailComponent implements OnInit {
  //@Input() 
  event: Event = new Event();

    constructor(
      private EventService: EventService,
      private route: ActivatedRoute,
      private location: Location,
      private router: Router,
    ) {    }

    save(): void {
      this.event.Save();
    }

    next(): void {
      this.router.navigate(['/event', this.event.EventID, 'home']);
    }

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.EventService.getEvent(params.get('id')))
        .subscribe(data => {
          this.event = data; 
          if (!this.event) {
            this.event=new Event();
            this.event.Name = "New Event";
          }
        });
    }

}