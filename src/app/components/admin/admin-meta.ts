//Metas: Meta[];
//  MetaID: string;
//  Country: string;
//  Province: string;
//  City: string;
import { Meta } from '../../shared/models/Meta';

import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { EventFormat } from './../../shared/models/EventFormat';
import { Admin } from './../../shared/models/Admin';
import { AdminService } from './../../shared/services/admin.service';


@Component({
  selector: 'admin-meta',
  templateUrl: './admin-meta.html',
  styleUrls: [ './admin.css' ],
  providers: [AdminService]
})

export class AdminMetaComponent implements OnInit {
  displayedColumns = ['name','country','state','city','actions'];
  dataSource: MetaDataSource;
  admin: Admin;
  NewMetaName: string;
  NewMetaCountry: string;
  NewMetaState: string;
  NewMetaCity: string;


  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.loadMetas();
  }

  loadMetas(): void {
    this.adminService.getAdmin()
    .then(data => {
      this.admin=data;
      this.dataSource = new MetaDataSource(this.admin.Metas);
    })
  }  
  
  add(): void {
    this.admin.Metas.push();
    let meta: Meta = new Meta();
    meta.Name = this.NewMetaName;
    meta.Country = this.NewMetaCountry;
    meta.State = this.NewMetaState;
    meta.City = this.NewMetaCity;
    this.admin.Metas[this.admin.Metas.length] = meta;
    this.admin.Save();
    this.loadMetas();
  }

  deleteRecord(metaID: string): void {
    var target: Meta = this.admin.Metas.find(x => x.MetaID == metaID);
    var index = this.admin.Metas.indexOf(target, 0);
    if (index > -1) {
      this.admin.Metas.splice(index, 1);
    }
    this.admin.Save();
    this.loadMetas();
  }
}





export class MetaDataSource extends DataSource<any>{
  constructor(metas: Meta[]) {
    super();
    this.metas = metas;
  }
  metas: Meta[];

  connect(): Observable<Meta[]> {
    return Observable.of(this.metas);
  }

  disconnect() {}

}