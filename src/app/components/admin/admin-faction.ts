//Factions: Faction[];
//  FactionID: string;
//  Name: string;

import { Component, OnInit } from '@angular/core';
import { Admin } from './../../shared/models/Admin';
import { AdminService } from './../../shared/services/admin.service';


@Component({
  selector: 'admin-faction',
  templateUrl: './admin-faction.html',
  styleUrls: [ './admin.css' ],
  providers: [AdminService]
})

export class AdminFactionComponent implements OnInit {
  admin: Admin;
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.adminService.getAdmin()
      .then(data => this.admin = data);
  }
}