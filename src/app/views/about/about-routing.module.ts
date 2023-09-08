import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { QaPageComponent } from './qa-page/qa-page.component';
import { RaPageComponent } from './ra-page/ra-page.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { AboutAfriglobalComponent } from './about-afriglobal/about-afriglobal.component';

const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'quality-assurance', component: QaPageComponent},
  {path: 'recognition-awards', component: RaPageComponent},
  {path: 'clients', component: ClientsPageComponent},
  {path: 'about-afriglobal', component: AboutAfriglobalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
