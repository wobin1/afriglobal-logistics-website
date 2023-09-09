import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { ClientsSectionComponent } from './clients-section/clients-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { VideoSectionComponent } from './video-section/video-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ClientsSectionComponent,
    ContactSectionComponent,
    VideoSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ClientsSectionComponent
  ]
})
export class HomeModule { }
