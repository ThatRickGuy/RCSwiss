//EventFormats: EventFormat[];
//  FormatID: string;
//  FormatName: string;
//  Scenarios: string[];

import { Component, OnInit } from '@angular/core';
import { Admin } from './../../shared/models/Admin';
import { AdminService } from './../../shared/services/admin.service';


@Component({
  selector: 'admin-format',
  templateUrl: './admin-format.html',
  styleUrls: [ './admin.css' ],
  providers: [AdminService]
})

export class AdminFormatComponent implements OnInit {
  admin: Admin;
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.adminService.getAdmin()
      .then(data => this.admin = data);
  }
}