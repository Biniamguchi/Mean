import { Component } from '@angular/core';
import { User } from "./user";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
}) 

export class AppComponent{
    private title  = 'app';
    private user   = new User();
    private users  = [];
    private states = ['Alabama',  'Alaska', 'Arizona', 'Arkansas', 'California',  'Colorado',  'Connecticut', 'Delaware', 'Florida', 'Georgia ', 'Hawaii ', 'Idaho ', 'Illinois ', 'Indiana ', 'Iowa ', 'Kansas ', 'Kentucky ', 'Louisiana ', 'Maine ', 'Maryland ', 'Massachusetts ', 'Michigan ', 'Minnesota ', 'Mississippi ', 'Missouri ', 'Montana ', 'Nebraska ', 'Nevada ', 'New Hampshire ', 'New Jersey ', 'New Mexico ', 'New York ', 'North Carolina ', 'North Dakota ', 'Ohio ', 'Oklahoma ', 'Oregon ', 'Pennsylvania ', 'Rhode Island ', 'South Carolina ', 'South Dakota ', 'Tennessee ', 'Texas ', 'Utah ', 'Vermont ', 'Virginia ', 'Washington ', 'West Virginia ', 'Wisconsin ', 'Wyoming'];
    private new_user = null;

    onSubmit(){
        this.new_user = this.user;
        this.users.push(this.user);
        this.user = new User();
    }
}