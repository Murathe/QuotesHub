import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'We often need less than we think we needs', 'Maya Angelou', 'Alicia', new Date(2019, 12, 12),0,0),
    new Quote(2, 'When someone shows you whom they are, believe them the first time only', 'Maya Angelou', 'Eve', new Date(2019, 10, 12),0,0),
  ]

  numberOfLike = 0;
  numberOfDislike = 0;
  
  QuoteDelete(index){
    this.quotes.splice(index, 1)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  likeButton(){
    this.numberOfLike = this.numberOfLike + 1;
  }

  dislikeButton(){
    this.numberOfDislike = this.numberOfDislike + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}



// quoteDelete(isComplete, index){
//   let QuoteDelete = confirm('Delete this'+ this.quotes[index].quote)

//   if (QuoteDelete) {
//     this.quotes.splice(index, 1)
//   }
// }