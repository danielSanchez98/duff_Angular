import { Component, OnInit } from '@angular/core';
import {AgeValidationService} from './services/age-validation.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'taller-angular';
  ageStatus:Number=1;

  constructor(private ageValidationService : AgeValidationService ){}
  ngOnInit(){
    this.ageValidationService.ageStatusObservable.subscribe(status =>{

      this.ageStatus=status;
    });
    
  }
  


}
