import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowserGamesComponent } from './pages/browser-games/browser-games.component';
import { PcGamesComponent } from './pages/pc-games/pc-games.component';
import { AllGamesComponent } from './pages/all-games/all-games.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'browser',
    component: BrowserGamesComponent,
  },
  {
    path: 'pc',
    component: PcGamesComponent,
  },
  {
    path: 'all',
    component: AllGamesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
