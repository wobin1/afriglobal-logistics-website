import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-type-card',
  templateUrl: './blog-type-card.component.html',
  styleUrls: ['./blog-type-card.component.css']
})
export class BlogTypeCardComponent {
  @Input() year!:string;
  @Input() detail!:string;
  @Input() image!:string;


}
