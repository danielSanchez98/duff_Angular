import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgeValidationService {

  constructor() { }
  ageStatus:Number;
  private ageStatusSubject = new Subject<Number>();
  ageStatusObservable= this.ageStatusSubject.asObservable();


  changeStatus(status:Number){
    this.ageStatus=status;
    this.ageStatusSubject.next(this.ageStatus);
  }
}
