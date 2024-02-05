import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserGamesComponent } from './pages/browser-games/browser-games.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';
import { PcGamesComponent } from './pages/pc-games/pc-games.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrowserGamesComponent,
    AllGamesComponent,
    PcGamesComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
