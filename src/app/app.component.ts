import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { ResetNumbers, StartNumbers, StopNumbers } from './actions/generic.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number1Observable;
  started = false;

  constructor(private store: Store<AppState>) {
    this.number1Observable = store.select('number1');
  }

  start() {
    this.started = true;
    this.store.dispatch(new StartNumbers());
  }

  reset() {
    this.store.dispatch(new ResetNumbers());
  }

  stop() {
    this.started = false;
    this.store.dispatch(new StopNumbers());
  }
}
