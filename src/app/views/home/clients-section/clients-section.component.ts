import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';

@Component({
  selector: 'app-clients-section',
  templateUrl: './clients-section.component.html',
  styleUrls: ['./clients-section.component.css']
})
export class ClientsSectionComponent {

  constructor(private router: RoutingService){}

  route(page:string){
    this.router.route(page)
  }

}
