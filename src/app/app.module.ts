import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteStructureComponent } from './quote-structure/quote-structure.component';
import { PublishDatePipe } from './publish-date.pipe';
import { QuoteInputFormComponent } from './quote-input-form/quote-input-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteStructureComponent,
    PublishDatePipe,
    QuoteInputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
