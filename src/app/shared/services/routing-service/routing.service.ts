import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }


  route(page:string){
    if(page=='home'){
      this.router.navigateByUrl('home')
    }
    if(page=='about-afriglobal'){
      this.router.navigateByUrl('about/about-afriglobal')
    }
    if(page=='quality-assurance'){
      this.router.navigateByUrl('about/quality-assurance')
    }
    if(page=='recognition-awards'){
      this.router.navigateByUrl('about/recognition-awards')
    }
    if(page=='clients'){
      this.router.navigateByUrl('about/clients')
    }
    if(page=='integrated-logistics-solution'){
      this.router.navigateByUrl('services/integrated-logistics-solution')
    }
    if(page=='door-to-door'){
      this.router.navigateByUrl('services/door-to-door')
    }
    if(page=='water-transport'){
      this.router.navigateByUrl('services/water-transport')
    }
    if(page=='air-fright'){
      this.router.navigateByUrl('services/air-fright')
    }
    if(page=='sea-fright'){
      this.router.navigateByUrl('services/sea-fright')
    }
    if(page=='chartering-service'){
      this.router.navigateByUrl('services/chartering-service')
    }
    if(page=='custom-clearance'){
      this.router.navigateByUrl('services/custom-clearance')
    }
    if(page=='road-transport'){
      this.router.navigateByUrl('services/road-transport')
    }
    if(page=='warehousing-and-distribution'){
      this.router.navigateByUrl('services/warehousing-and-distribution')
    }
    if(page=='heavy-lift'){
      this.router.navigateByUrl('services/heavy-lift')
    }
    if(page=='logistics-for-comodities'){
      this.router.navigateByUrl('services/logistics-for-comodities')
    }

    if(page=='project-handling'){
      this.router.navigateByUrl('services/project-handling')
    }
    if(page=='csr-activities'){
      this.router.navigateByUrl('csr-activities')
    }
    if(page=='hse-policy'){
      this.router.navigateByUrl('hse-policy')
    }
    if(page=='contact'){
      this.router.navigateByUrl('contact')
    }
    if(page=='get-qoute'){
      this.router.navigateByUrl('get-qoute')
    }
    if(page=='career'){
      this.router.navigateByUrl('career')
    }
  }
}
