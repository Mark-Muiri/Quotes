import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  [x: string]: any;

  @Input ()quotes:Quote= new Quote(0,"","",new Date)
  
  @Output() isComplete = new EventEmitter<boolean>();


  quoteComplete(complete:boolean){
    this.publishDate.emit(complete);
  }

  quoteDelete(complete:boolean){
    this.publishDate.emit(complete);
  }
  numberOfVotes :number = (0);

  upVoteButtonClick(){
this.numberOfVotes++;
  }
  downVoteButtonClick(){
    this.numberOfVotes--;
  }
  constructor() { }

  ngOnInit() {
  }


}