import { Injectable } from '@angular/core';
import { Admin } from './../models/Admin';

@Injectable()
export class AdminService {
    public getAdmin(): Promise<Admin> {
        return new Promise<Admin>((resolve, reject) => {
            let admin: Admin = new Admin();
            admin.load();
            resolve(admin);
        } );
      }


}
