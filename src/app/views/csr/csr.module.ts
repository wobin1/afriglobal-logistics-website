import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsrRoutingModule } from './csr-routing.module';
import { CsrComponent } from './csr/csr.component';
import { CardsComponent } from './cards/cards.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CsrComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    CsrRoutingModule,
    SharedModule
  ]
})
export class CsrModule { }
