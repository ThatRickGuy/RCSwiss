import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { HeroesComponent }      from './components/heroes/heroes.component';
//import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HomeComponent }       from './components/Home/home';
import { EventsComponent }     from './components/Events/Events';
import { EventDetailComponent} from './components/Event-detail/Event-detail';
 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'event', component: EventDetailComponent }
];

//{ path: 'detail/:id', component: HeroDetailComponent },
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}