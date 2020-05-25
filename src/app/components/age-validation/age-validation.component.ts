import { Component, OnInit } from '@angular/core';
import {AgeValidationService} from '../../services/age-validation.service'

@Component({
  selector: 'app-age-validation',
  templateUrl: './age-validation.component.html',
  styleUrls: ['./age-validation.component.css']
})
export class AgeValidationComponent implements OnInit {

  constructor(private ageValidationService : AgeValidationService ) { }

  ngOnInit(): void {
  }
  changeStatus(status:Number){
    this.ageValidationService.changeStatus(status);

  }

}
