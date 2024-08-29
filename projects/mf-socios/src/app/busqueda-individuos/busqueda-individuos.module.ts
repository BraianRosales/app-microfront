import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaIndividuosComponent } from './busqueda-individuos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BusquedaIndividuosComponent,
  },
];

@NgModule({
  declarations: [BusquedaIndividuosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [BusquedaIndividuosComponent],
})
export class BusquedaIndividuosModule {}
