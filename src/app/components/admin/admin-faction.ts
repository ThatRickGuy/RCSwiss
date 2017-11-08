import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Faction } from './../../shared/models/Faction';
import { Admin } from './../../shared/models/Admin';
import { AdminService } from './../../shared/services/admin.service';

@Component({
  selector: 'admin-faction',
  styleUrls: ['./admin.css'],
  templateUrl: './admin-faction.html',
  providers: [AdminService]
})
export class AdminFactionComponent  implements OnInit {
  displayedColumns = ['name','actions'];
  dataSource: FactionDataSource;
  admin:Admin;
  NewFaction:string;

  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.loadFactions();
  }

  loadFactions(): void {
    this.adminService.getAdmin()
    .then(data => {
      this.admin = data;
      this.dataSource = new FactionDataSource(this.admin.Factions);
    });
  }

  add(): void {
    this.admin.Factions.push();
    let faction: Faction = new Faction();
    faction.Name = this.NewFaction;
    this.admin.Factions[this.admin.Factions.length] = faction;
    this.admin.Save();
    this.loadFactions();
  }

  deleteRecord(factionID: string): void {
    var target: Faction = this.admin.Factions.find(x => x.FactionID == factionID);
    var index = this.admin.Factions.indexOf(target, 0);
    if (index > -1) {
      this.admin.Factions.splice(index, 1);
    }
    this.admin.Save();
    this.loadFactions();
  }
}

export class FactionDataSource extends DataSource<any>{
  constructor(factions: Faction[]) {
    super();
    this.factions = factions;
  }
  factions: Faction[];

  connect(): Observable<Faction[]> {
    return Observable.of(this.factions);
  }

  disconnect() {}

}

