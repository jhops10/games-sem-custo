import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserGamesComponent } from './pages/browser-games/browser-games.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { PcGamesComponent } from './pages/pc-games/pc-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowserGamesComponent,
    AllGamesComponent,
    PcGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
