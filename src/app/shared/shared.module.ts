import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaDirective } from './directives/prueba.directive';
import { PruebaPipe } from './pipes/prueba.pipe';



@NgModule({
  declarations: [
    PruebaDirective,
    PruebaPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
