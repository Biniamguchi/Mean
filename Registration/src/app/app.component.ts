import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  users = [];
  user = {
    email: '',
    first_name: '',
    last_name: '',
    password: ''

  }
  onSubmit(){
    console.log("onSubmit()");
    console.log(this.user);

    this.users.push(this.user);
    
    this.user = {
      email: '',
      first_name: '',
      last_name: '',
      password:''
    };
  }
}  
 
 