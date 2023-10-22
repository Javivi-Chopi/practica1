import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { AboutInfoComponent } from './components/about-info/about-info.component';
import { PlayersInfoComponent } from './components/players-info/players-info.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';

@NgModule({
  declarations: [
    MenuComponent,
    AboutInfoComponent,
    PlayersInfoComponent,
    PlayerFormComponent,
  ],
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuComponent,
    AboutInfoComponent,
    PlayersInfoComponent,
    PlayerFormComponent,
  ],
})
export class SharedModule {}
