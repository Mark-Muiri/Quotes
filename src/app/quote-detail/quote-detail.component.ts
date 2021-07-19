import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input ()quotes:Quotes= new Quotes(0,"","",new Date,0,0)
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote(){
    this.quotes.showupvote=this.quotes.showupvote++
  }
  downvote(){
    this.quotes.showdownvote=this.quotes.showdownvote++
  }

  constructor() { }

  ngOnInit(): void {
  }

}