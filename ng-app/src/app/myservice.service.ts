import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  serviceprop = "New Service Created.";

  constructor() { }

  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }
}
