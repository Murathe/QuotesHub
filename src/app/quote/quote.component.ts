import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'We often less than we think we neeeds', 'Maya Angelou', 'Alicia', new Date(2019, 12, 12),0,0),
    new Quote(1, 'When someone shows you whom they are, believe them the first time only', 'Maya Angelou', 'Eve', new Date(2019, 12, 12),0,0),
  ];

  quoteDelete(index){
    this.quotes.splice(index, 1)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){ 
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  numberOfLike : number = 0;
  numberOfDislike : number = 0;

  constructor() { }

  ngOnInit() {
  }

}


