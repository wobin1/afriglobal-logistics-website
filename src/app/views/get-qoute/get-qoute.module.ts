import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetQouteRoutingModule } from './get-qoute-routing.module';
import { GetQouteComponent } from './get-qoute/get-qoute.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GetQouteComponent
  ],
  imports: [
    CommonModule,
    GetQouteRoutingModule,
    SharedModule
  ]
})
export class GetQouteModule { }
