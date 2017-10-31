import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { EventService } from './../../shared/services/Event.service';
import { Event } from './../../shared/models/Event';
import { Router }   from '@angular/router';
import 'rxjs/add/operator/switchMap';



@Component({
    selector: 'Event-home',
    templateUrl: './Event-home.html',
    styleUrls: ['./Event-home.css'],
    providers: [EventService]
  })
  export class EventHomeComponent implements OnInit {
      @Input() Event: Event;

      constructor(
        private EventService: EventService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
      ) {}
  
      save(): void {
        this.Event.Save();
      }
  
      ngOnInit(): void {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.EventService.getEvent(params.get('id')))
          .subscribe(data => this.Event = data);
  
        if (this.Event)
        {
          // exists, do nothing
        }
        else
        {
          if (this.route.snapshot.paramMap.get('id'))
          {
            //alert("Load This: " + this.route.snapshot.paramMap.get('id'));
            this.EventService.getEvent(this.route.snapshot.paramMap.get('id')).then(data => this.Event = data);
          }
          else
          {
            //alert("new event, create");
            this.Event = new Event();
          }
        } 
      }
  
  }