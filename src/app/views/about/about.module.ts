import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistorySectionComponent } from './history-section/history-section.component';
import { QaPageComponent } from './qa-page/qa-page.component';
import { RaPageComponent } from './ra-page/ra-page.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { AboutAfriglobalComponent } from './about-afriglobal/about-afriglobal.component';
import { BlogTypeCardComponent } from './blog-type-card/blog-type-card.component';


@NgModule({
  declarations: [
    AboutComponent,
    HistorySectionComponent,
    QaPageComponent,
    RaPageComponent,
    ClientsPageComponent,
    AboutAfriglobalComponent,
    BlogTypeCardComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
