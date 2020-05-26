import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})

export class HomeContentComponent implements OnInit {
  imagenes= ["assets/img/slider1.png","assets/img/slider2.png","assets/img/slider3.png"];
  
  
  constructor() { 
   
  }

  ngOnInit(): void {

    
  }
   
 
}
