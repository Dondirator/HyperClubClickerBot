import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeadingPrimaryComponent } from './components/heading-primary/heading-primary.component';
import { EventsComponent } from './pages/events/events.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { BlurredCircleComponent } from './components/blurred-circle/blurred-circle.component';
import { EventAtTonComponent } from './pages/event-at-ton/event-at-ton.component';
import { TonEventItemComponent } from './components/ton-event-item/ton-event-item.component';
import { GuideComponent } from './pages/guide/guide.component';
import { WhitelistComponent } from './pages/whitelist/whitelist.component';
import { EmailformComponent } from './components/emailform/emailform.component';
import { AirdropComponent } from './pages/airdrop/airdrop.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LogoComponent,
    HeadingPrimaryComponent,
    EventsComponent,
    EventItemComponent,
    BlurredCircleComponent,
    EventAtTonComponent,
    TonEventItemComponent,
    GuideComponent,
    WhitelistComponent,
    EmailformComponent,
    AirdropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
