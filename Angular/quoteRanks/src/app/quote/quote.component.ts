import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    @Input() private quote:Quote    = new Quote();
    @Input() private index:number;
    @Output() private quoteEmitter  = new EventEmitter();

  constructor() { }
   onVoteUp(){
        this.quote.votes++;
    }
    onVoteDown(){
        this.quote.votes--;
    }
    onDelete(){
        this.quoteEmitter.emit(this.index);
    }

  ngOnInit() {
  }

}
