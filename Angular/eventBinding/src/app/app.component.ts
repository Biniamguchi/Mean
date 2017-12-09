import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Component_Events';
  myName = 'Biniam';
  onButtonClick() { 
    console.log('Click event is working');
    }
  buttonClick(data) { 
    console.log('You clicked an event, data:', data,data);
    }
  clickedAButton(event) { 
    console.log('Click event is working, right:', event);
}
}
