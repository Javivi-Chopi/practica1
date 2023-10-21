import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { AboutInfoComponent } from './components/about-info/about-info.component';

@NgModule({
  declarations: [MenuComponent, AboutInfoComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [CommonModule, FormsModule, IonicModule, MenuComponent, AboutInfoComponent],
})
export class SharedModule {}
