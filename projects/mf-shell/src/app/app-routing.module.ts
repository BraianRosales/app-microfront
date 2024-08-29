import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'socios',
    loadChildren: () =>
      import('mfSocios/BusquedaIndividuosModule').then(
        (m) => m.BusquedaIndividuosModule
      ),
  },
  {
    path: 'comercios',
    loadChildren: () =>
      import('mfComercios/BusquedaComerciosModule').then(
        (m) => m.BusquedaComerciosModule
      ),
  },
  {
    path: 'mix',
    loadChildren: () =>
      import('mfMix/IndividuosComerciosModule').then(
        (m) => m.IndividuosComerciosModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
