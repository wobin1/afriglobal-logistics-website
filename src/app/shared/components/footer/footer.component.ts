import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing-service/routing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: RoutingService){}


  route(page:string){
    console.log("route working")
    this.router.route(page)
  }

}
