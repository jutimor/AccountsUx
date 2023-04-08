import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/board',
    pathMatch: 'full',
  },
  {
    path: 'operations',
    loadChildren: () =>
      import('./operations/operations.module').then((module) => module.OperationsModule),
  },
  {
    path: 'board',
    loadChildren: () =>
      import('./board/board.module').then((module) => module.BoardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
