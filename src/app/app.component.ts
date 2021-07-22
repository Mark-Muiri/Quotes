import { Component } from '@angular/core';
import { Quote } from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes'

  //   quotes:Quote[]=[
  //     new Quote (1, 'Love For All, Hatred For None.', ' Khalifatul Masih III',new Date(2019,9,14)),
  //       new Quote(2,'Change the world by being yourself.', 'Amy Poehler',new Date(2019,6,9)),
  //       new Quote(3,'Every moment is a fresh beginning.',' T.S Eliot',new Date(2019,1,12)),
  //       new Quote(4,'Never regret anything that made you smile.','Mark Twain',new Date(2019,11,18)),
  //       new Quote(5,'Die with memories, not dreams','Uknown',new Date(2019,2,14)),
  //       new Quote(6,'Aspire to inspire before we expire','Uknown',new Date(2019,3,14)),
  //     ];

}
