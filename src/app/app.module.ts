import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }        from './components/app/app.component';
import { EventsComponent }     from './components/Events/Events';
import { EventDetailComponent} from './components/Event-detail/Event-detail';
import { EventHomeComponent} from './components/Event-home/Event-home';
import { HomeComponent }       from './components/Home/home';

import { EventService }         from './shared/services/Event.service';

import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';

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
    MatIconModule
    //MatButtonModule,
   // MatCheckboxModule
    ],

 // exports: [MatButtonModule, MatCheckboxModule],
  declarations: [ 
    AppComponent,
    EventsComponent,
    EventDetailComponent,
    EventHomeComponent,
    HomeComponent],
  providers: [
    EventService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

