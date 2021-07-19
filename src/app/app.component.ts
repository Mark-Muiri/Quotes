import { Component } from '@angular/core';
import { Quotes } from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[]=[
    new Quotes (1, 'Love For All, Hatred For None.', ' Khalifatul Masih III',new Date(2019,9,14),0,0),
      new Quotes(2,'Change the world by being yourself.', 'Amy Poehler',new Date(2019,6,9),0,0),
      new Quotes(3,'Every moment is a fresh beginning.',' T.S Eliot',new Date(2019,1,12),0,0),
      new Quotes(4,'Never regret anything that made you smile.','Mark Twain',new Date(2019,11,18),0,0),
      new Quotes(5,'Die with memories, not dreams','Uknown',new Date(2019,2,14),0,0),
      new Quotes(6,'Aspire to inspire before we expire','Uknown',new Date(2019,3,14),0,0),
    ];

}
