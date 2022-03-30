import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      import('./view/view.module').then((p) => p.ViewModule),
  },
  {
    path: 'home',
    loadChildren: async () =>
      import('./view/view.module').then((p) => p.ViewModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
