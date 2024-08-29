import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComerciosComponent } from './busqueda-comercios.component';

const routes: Routes = [
  {
    path: '',
    component: BusquedaComerciosComponent,
  },
];

@NgModule({
  declarations: [BusquedaComerciosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [BusquedaComerciosComponent],
})
export class BusquedaComerciosModule {}
