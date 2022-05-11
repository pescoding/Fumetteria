import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdinaPage } from './ordina.page';

const routes: Routes = [
  {
    path: '',
    component: OrdinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdinaPageRoutingModule {}
