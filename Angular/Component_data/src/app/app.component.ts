import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numb: number =1.23
  x: number =7;
  y: number =9;
  myStr: string = "abc";
  number = 10;
  name = 'Bill Gates';
  amount = 1.20;
  today = new Date();
  user = {
      firstName: 'Darth',
      lastName: 'Vader'    
  }
  myBoolean = true;
  myArray = [1,2,3,4,5];
  color: String = 'blue'

}

