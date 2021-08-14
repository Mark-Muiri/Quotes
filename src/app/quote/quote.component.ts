import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote (1, 'Love For All, Hatred For None.', ' Khalifatul Masih III',new Date(2019,9,14)),
    new Quote(2,'Change the world by being yourself.', 'Amy Poehler',new Date(2019,6,9)),
    new Quote(3,'Every moment is a fresh beginning.',' T.S Eliot',new Date(2019,1,12)),
    new Quote(4,'Never regret anything that made you smile.','Mark Twain',new Date(2019,11,18)),
    new Quote(5,'Die with memories, not dreams','Uknown',new Date(2019,2,14)),
    new Quote(6,'Aspire to inspire before we expire','Uknown',new Date(2019,3,14)),
  ];
  toggleDetails(index:any){
    this.quotes[index].showSubmitDate = !this.quotes[index].showSubmitDate;
  }
    
  quoteComplete(publishDate:any, index :any){
    if (publishDate) {
      this.quotes.splice(index,1);
    }
  }    
  deleteQuote(publishDate:any, index:any){
    if (publishDate) {
      let toDelete = confirm(`Are you sure you want to delete  the quote"${this.quotes[index].quote}" ~ ${this.quotes[index].author}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }


  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}


