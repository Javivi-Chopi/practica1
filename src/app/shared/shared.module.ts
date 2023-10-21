import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { PlayersInfoComponent } from './components/players-info/players-info.component';

@NgModule({
  declarations: [MenuComponent, PlayersInfoComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [CommonModule, FormsModule, IonicModule, MenuComponent, PlayersInfoComponent],
})
export class SharedModule {}
