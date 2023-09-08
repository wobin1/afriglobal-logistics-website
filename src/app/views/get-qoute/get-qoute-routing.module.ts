import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetQouteComponent } from './get-qoute/get-qoute.component';

const routes: Routes = [
  {path: "get-qoute", component: GetQouteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetQouteRoutingModule { }
