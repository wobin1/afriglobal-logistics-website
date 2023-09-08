import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { OthersComponent } from './layout/others/others.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'home', component: MainComponent, children:[
    {path:"", loadChildren: ()=> import('./views/home/home.module').then(m => m.HomeModule)},
  ]},
  {path:'', component: OthersComponent, children:[
    {path:"about", loadChildren: ()=> import('./views/about/about.module').then(m => m.AboutModule)},
    {path:"", loadChildren: ()=> import('./views/our-services/our-services.module').then(m=> m.OurServicesModule)}
  ]},
  {path:'', component: OthersComponent, children:[
    {path:"", loadChildren: ()=> import('./views/csr/csr.module').then(m => m.CsrModule)},
  ]},
  {path:'', component: OthersComponent, children:[
    {path:"", loadChildren: ()=> import('./views/hse/hse.module').then(m => m.HseModule)},
  ]},
  {path:'', component: OthersComponent, children:[
    {path:"", loadChildren: ()=> import('./views/contact/contact.module').then(m => m.ContactModule)},
  ]},
  {path:'', component: OthersComponent, children:[
    {path:"", loadChildren: ()=> import('./views/get-qoute/get-qoute.module').then(m => m.GetQouteModule)},
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
