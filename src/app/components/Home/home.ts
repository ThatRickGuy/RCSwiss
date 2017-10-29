import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Router }   from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
    @Input() event_ID: string;

    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private router: Router,
    ) {}

    goBack(): void {
      this.location.back();
    }

    ngOnInit(): void {

    }
}