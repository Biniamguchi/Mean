import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
  users = [];
  user = {
    firstName: '',
    lastName: ''
  }
  onSubmit(){
    console.log("onSubmit()");
    console.log(this.user);

    this.users.push(this.user);
    //re-define use the above user won't be a pointer to the object
    this.user = {
        firstName: '',
        lastName: ''
  };
  }
}

