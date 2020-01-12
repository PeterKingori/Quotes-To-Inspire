import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'What we are is God\'s gift to us. What we become is our gift to God.', 'Eleanor Powell', 'James Kasuku', new Date(2019,12,19), 0, 0),
    new Quote(2, 'Defeat is a state of mind. No one is ever defeated until defeat has been accepted as a reality.', 'Bruce Lee', 'Peter Ndegwa', new Date(2020,1,11), 0, 0),
    new Quote(3, 'An essential aspect of creativity is not being afraid to fail.', 'Edwin Land', 'Mercy Haynes', new Date(2018,12,12), 0, 0),
    new Quote(4, 'Most of our troubles are due to our passionate desire for and attachment to things that we misapprehend as enduring entities.', 'Dalai Lama', 'Mercy Murima', new Date(2019,5,5), 0, 0),
    new Quote(5, 'A mind that is stretched by a new experience can never go back to its old dimensions.', 'Oliver Wendell Holmes, Jr.', 'Tony Mambo', new Date(2020,1,1), 0, 0)
  ];

  toggleDetails(index) {
    this.quotes[index].showSubmittedBy = !this.quotes[index].showSubmittedBy;
    this.quotes[index].showSubmittedOn = !this.quotes[index].showSubmittedOn;
  }

  quoteDelete(isDelete, index) {
    if (isDelete) {
      let toDelete =  confirm(`Are you sure you want to delete this quote?`);
      if(toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  upvoteCount(index) {
    this.quotes[index].upvotes ++;
  }

  downvoteCount(index) {
    this.quotes[index].downvotes ++;
  }

  constructor() { }

  ngOnInit() {
  }

}
