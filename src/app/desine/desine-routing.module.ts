import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesinePage } from './desine.page';

const routes: Routes = [
  {
    path: '',
    component: DesinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesinePageRoutingModule {}
