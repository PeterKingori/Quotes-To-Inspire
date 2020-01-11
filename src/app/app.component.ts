import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-To-Inspire';

  quotes:Quote[] = [    
    {id:1, text:'What we are is God\'s gift to us. What we become is our gift to God. - Eleanor Powell'},
    {id:2, text:'Defeat is a state of mind. No one is ever defeated until defeat has been accepted as a reality. - Bruce Lee'},
    {id:3, text:'An essential aspect of creativity is not being afraid to fail. - Edwin Land'},
    {id:4, text:'Most of our troubles are due to our passionate desire for and attachment to things that we misapprehend as enduring entities. - Dalai Lama'},
    {id:5, text:'A mind that is stretched by a new experience can never go back to its old dimensions. - Oliver Wendell Holmes, Jr.'}
    ];
  }
  