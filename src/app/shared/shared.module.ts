import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [CommonModule, FormsModule, IonicModule, MenuComponent],
})
export class SharedModule {}
