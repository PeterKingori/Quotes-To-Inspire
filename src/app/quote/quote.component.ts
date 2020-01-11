import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [    
    {id:1, text:'What we are is God\'s gift to us. What we become is our gift to God.', author:'Eleanor Powell', submittedBy:'James Kasuku', submittedOn: new Date(2019,12,19), upvotes:0, downvotes:0},
    {id:2, text:'Defeat is a state of mind. No one is ever defeated until defeat has been accepted as a reality.', author:'Bruce Lee', submittedBy:'Peter Ndegwa', submittedOn: new Date(2020,1,11), upvotes: 0, downvotes:0},
    {id:3, text:'An essential aspect of creativity is not being afraid to fail.', author:'Edwin Land', submittedBy:'Mercy Haynes', submittedOn: new Date(2018,12,12), upvotes:0, downvotes:0},
    {id:4, text:'Most of our troubles are due to our passionate desire for and attachment to things that we misapprehend as enduring entities.', author:'Dalai Lama', submittedBy:'Hazel Murima', submittedOn: new Date(2019,5,5), upvotes:0, downvotes:0},
    {id:5, text:'A mind that is stretched by a new experience can never go back to its old dimensions.', author:'Oliver Wendell Holmes, Jr.', submittedBy:'Tony Mambo', submittedOn: new Date(2020,1,1), upvotes:0,downvotes:0}
  ];

  constructor() { }

  ngOnInit() {
  }

}
