import { Component, Input } from '@angular/core';
import { RoutingService } from '../services/routing-service/routing.service';

@Component({
  selector: 'app-others-header',
  templateUrl: './others-header.component.html',
  styleUrls: ['./others-header.component.css']
})
export class OthersHeaderComponent {
  @Input() page!:string;
  @Input() subpage!:string;

  constructor(private router: RoutingService){}

  route(page:string){
    this.router.route(page)
  }


}
