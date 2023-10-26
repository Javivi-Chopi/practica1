import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersAboutPage } from './players-about.page';

const routes: Routes = [
  {
    path: ':id',
    component: PlayersAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersAboutPageRoutingModule {}
