//Metas: Meta[];
//  MetaID: string;
//  Country: string;
//  Province: string;
//  City: string;

import { Component, OnInit } from '@angular/core';
import { Admin } from './../../shared/models/Admin';
import { AdminService } from './../../shared/services/admin.service';


@Component({
  selector: 'admin-meta',
  templateUrl: './admin-meta.html',
  styleUrls: [ './admin.css' ],
  providers: [AdminService]
})

export class AdminMetaComponent implements OnInit {
  admin: Admin;
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.adminService.getAdmin()
      .then(data => this.admin = data);
  }
}