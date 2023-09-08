import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HseRoutingModule } from './hse-routing.module';
import { HseComponent } from './hse/hse.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HseComponent
  ],
  imports: [
    CommonModule,
    HseRoutingModule,
    SharedModule
  ]
})
export class HseModule { }
