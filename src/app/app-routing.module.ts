import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { EventAtTonComponent } from './pages/event-at-ton/event-at-ton.component';
import { GuideComponent } from './pages/guide/guide.component';
import { WhitelistComponent } from './pages/whitelist/whitelist.component';
import { AirdropComponent } from './pages/airdrop/airdrop.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'event-at-ton', component: EventAtTonComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'whitelist', component: WhitelistComponent},
  {path: 'airdrop', component: AirdropComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}
