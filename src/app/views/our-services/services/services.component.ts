import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(private router: ActivatedRoute){}

  service!:any;

  ngOnInit(){
    const url = window.location.href
    console.log(url)

    const paths = url.split("/");
    const lastPath = paths[paths.length - 1];
    this.service = lastPath; 
    
  }

}
