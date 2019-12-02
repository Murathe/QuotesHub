import { Component, OnInit, Output } from '@angular/core';
import { Quote } from './../quote';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", new Date(), 0,0);

  @Output() addQuote = new EventEmitter<Quote>();

  addNewQuote: any;


  constructor() { }

  ngOnInit() {
  }

}
