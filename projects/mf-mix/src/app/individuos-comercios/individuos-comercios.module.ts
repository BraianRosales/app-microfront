import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividuosComerciosComponent } from './individuos-comercios.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndividuosComerciosComponent,
  },
];

@NgModule({
  declarations: [IndividuosComerciosComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class IndividuosComerciosModule {}
