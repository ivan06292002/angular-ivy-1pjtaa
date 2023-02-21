import { Component } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //define numbers$ as an observable
  numbers$: Observable<number>;
  constructor() {}
}

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//subscribing to the observable
numbers$.subscribe((value) => console.log(value));

//manipulate data using map
numbers.

numbers$
  .pipe(map((value) => value * 2))
  .subscribe((value) => console.log(value));
