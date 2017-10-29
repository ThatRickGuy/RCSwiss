import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }        from './components/app/app.component';
import { AdminComponent }        from './components/admin/admin';
import { AdminFactionComponent }        from './components/admin/admin-faction';
import { AdminFormatComponent }        from './components/admin/admin-format';
import { AdminMetaComponent }        from './components/admin/admin-meta';
import { EventsComponent }     from './components/Events/Events';
import { EventDetailComponent} from './components/Event-detail/Event-detail';
import { EventHomeComponent} from './components/Event-home/Event-home';
import { HomeComponent }       from './components/Home/home';

import { EventService }         from './shared/services/Event.service';
import { AdminService }         from './shared/services/Admin.service';

import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';

import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';

//import { MatButtonModule } from '@angular/material';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    CdkTableModule
    //MatButtonModule,
   // MatCheckboxModule
    ],

 // exports: [MatButtonModule, MatCheckboxModule],
  declarations: [ 
    AppComponent,
    AdminComponent,
    AdminFactionComponent,
    AdminFormatComponent,
    AdminMetaComponent,
    EventsComponent,
    EventDetailComponent,
    EventHomeComponent,
    HomeComponent],
  providers: [
    EventService,
    AdminService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

