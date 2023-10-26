import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayersAboutPageRoutingModule } from './players-about-routing.module';

import { PlayersAboutPage } from './players-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersAboutPageRoutingModule
  ],
  declarations: [PlayersAboutPage]
})
export class PlayersAboutPageModule {}
