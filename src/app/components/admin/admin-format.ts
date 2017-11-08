//EventFormats: EventFormat[];
//  FormatID: string;
//  FormatName: string;
//  Scenarios: string[];

import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { EventFormat } from './../../shared/models/EventFormat';
import { Admin } from './../../shared/models/Admin';
import { AdminService } from './../../shared/services/admin.service';


@Component({
  selector: 'admin-format',
  templateUrl: './admin-format.html',
  styleUrls: [ './admin.css' ],
  providers: [AdminService]
})

export class AdminFormatComponent implements OnInit {
  displayedColumns = ['name','scenarios','actions'];
  dataSource: FormatDataSource;
  admin: Admin;
  NewFormatName: string;
  NewFormatScenarios: string;

  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.loadFormats();
  }

  loadFormats(): void {
    this.adminService.getAdmin()
    .then(data => {
      this.admin=data;
      this.dataSource = new FormatDataSource(this.admin.EventFormats);
    })
  }
  add(): void {
    this.admin.Factions.push();
    let format: EventFormat = new EventFormat();
    format.FormatName = this.NewFormatName;
    format.Scenarios = this.NewFormatScenarios.split(",");
    this.admin.EventFormats[this.admin.EventFormats.length] = format;
    this.admin.Save();
    this.loadFormats();
  }

  deleteRecord(formatID: string): void {
    var target: EventFormat = this.admin.EventFormats.find(x => x.FormatID == formatID);
    var index = this.admin.EventFormats.indexOf(target, 0);
    if (index > -1) {
      this.admin.EventFormats.splice(index, 1);
    }
    this.admin.Save();
    this.loadFormats();
  }
}



export class FormatDataSource extends DataSource<any>{
  constructor(formats: EventFormat[]) {
    super();
    this.formats = formats;
  }
  formats: EventFormat[];

  connect(): Observable<EventFormat[]> {
    return Observable.of(this.formats);
  }

  disconnect() {}

}