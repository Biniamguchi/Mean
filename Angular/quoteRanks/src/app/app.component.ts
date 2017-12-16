import { Component, Input, ViewChild } from '@angular/core';
import { Quote } from "./quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private title:string = "Quotes";
    private quote:Quote = new Quote();
    private quotes:Array<Quote> = [];
    @Input() private index:number;

    onSubmit(){
        this.quotes.push(this.quote);
        this.quote = new Quote();
    }

    onDelete(index){
        this.quotes.splice(index,1);
    }
}
