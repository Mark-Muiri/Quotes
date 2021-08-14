import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Quote } from '../Quote';

@Component({
  selector: 'app-quote-structure',
  templateUrl: './quote-structure.component.html',
  styleUrls: ['./quote-structure.component.css']
})
export class QuoteStructureComponent implements OnInit {
  @Input() quote: Quote = new Quote(0, '', '', new Date);
 
  @Output() publishDate = new EventEmitter<boolean>();

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
  


