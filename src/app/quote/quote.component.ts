import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quotes[] = [   

      new Quotes (1, 'Love For All, Hatred For None.', ' Khalifatul Masih III',new Date(2019,9,14),0,0),
      new Quotes(2,'Change the world by being yourself.', 'Amy Poehler',new Date(2019,6,9),0,0),
      new Quotes(3,'Every moment is a fresh beginning.',' T.S Eliot',new Date(2019,1,12),0,0),
      new Quotes(4,'Never regret anything that made you smile.','Mark Twain',new Date(2019,11,18),0,0),
      new Quotes(5,'Die with memories, not dreams','Uknown',new Date(2019,2,14),0,0),
      new Quotes(6,'Aspire to inspire before we expire','Uknown',new Date(2019,3,14),0,0),
    ];
  
     toggleDetails (index:any) {
      this.quote[index].showDescription = !this.quote[index].showDescription;
    }
    addNewQuote(quote:any){    
      let quoteLength = this.quote.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quote.push(quote)
    }
    
    deleteQuote(isComplete:any, index:any){
      if (isComplete) {
        let toDelete = confirm('****Are you sure you want to delete this quote')
  
        if(toDelete){      
        this.quote.splice(index,1);
        }
      }
    }
    
  
  constructor() { }

  ngOnInit(): void {
  }

}
