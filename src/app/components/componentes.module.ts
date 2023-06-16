import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaTransferenciasComponent } from './tabla-transferencias/tabla-transferencias.component';
import { RouterModule } from '@angular/router';




@NgModule({
  // componentes que pertenecen al módulo
  declarations: [
    TablaTransferenciasComponent
  ],
  // cosas que necesitamos en este módulo
  imports: [
    CommonModule,
    RouterModule
  ],
  // componentes declarados en el módulo que se pueden usar fuera
  exports: [
    TablaTransferenciasComponent
  ]
})
export class ComponentesModule { }