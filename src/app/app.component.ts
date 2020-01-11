import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-To-Inspire';
  quotes: string[];
  constructor() {
    this.quotes = ['What we are is God\'s gift to us. What we become is our gift to God. - Eleanor Powell', 'Defeat is a state of mind. No one is ever defeated until defeat has been accepted as a reality. - Bruce Lee', 'An essential aspect of creativity is not being afraid to fail. - Edwin Land', 'Most of our troubles are due to our passionate desire for and attachment to things that we misapprehend as enduring entities. - Dalai Lama', 'A mind that is stretched by a new experience can never go back to its old dimensions. - Oliver Wendell Holmes, Jr.'];
  }
}
