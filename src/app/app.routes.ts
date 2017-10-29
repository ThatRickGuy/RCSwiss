import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }       from './components/Home/home';
import { EventsComponent }     from './components/Events/Events';
import { EventDetailComponent} from './components/Event-detail/Event-detail';
import { EventHomeComponent}   from './components/Event-home/Event-home';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'event', component: EventDetailComponent },
  { path: 'event/:id/home', component: EventHomeComponent },
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}