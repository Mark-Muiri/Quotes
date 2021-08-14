import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../Quote';

@Component({
  selector: 'app-quote-input-form',
  templateUrl: './quote-input-form.component.html',
  styleUrls: ['./quote-input-form.component.css']
})
export class QuoteInputFormComponent implements OnInit {

  newQuote = new Quote(0,"","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","",new Date());

      }
      
  constructor() { }

  ngOnInit(): void {
  }

}
