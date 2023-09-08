import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HseComponent } from './hse/hse.component';

const routes: Routes = [
  {path: "hse-policy", component: HseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HseRoutingModule { }
