import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  newcmp = 'This is a new component';

  selectedval = { id : 10, text :"October"};
  months = [
            { id : 1, text :"January"}, 
            { id : 2, text :"Feburary"}, 
            { id : 3, text :"March"}, 
            { id : 4, text :"April"}, 
            { id : 5, text :"May"}, 
            { id : 6, text :"June"}, 
            { id : 7, text :"July"}, 
            { id : 8, text :"August"}, 
            { id : 9, text :"September"}, 
            { id : 10, text :"October"}, 
            { id : 11, text :"November"}, 
            { id : 12, text :"December"}
          ];
  // months = ["January", "February", "March", "April",
  //           "May", "June", "July", "August", "September",
  //           "October", "November", "December"];
  
  isavailable = true;
  todaydate;

  constructor(private myService: MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.myService.showTodayDate();
  }

  clickme(e){
    console.log('You clicked me');
    console.log(e);
    console.log(e.toElement);
  }

  changeOption(e){
    alert('Option changed to '+ this.months.find(e=> e.id == this.selectedval.id).text);
    console.log(e);
  }

}
