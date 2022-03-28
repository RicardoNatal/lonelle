import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      import('./view/view.module').then((p) => p.ScreenModule),
  },
  {
    path: 'home',
    loadChildren: async () =>
      import('./view/view.module').then((p) => p.ScreenModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
