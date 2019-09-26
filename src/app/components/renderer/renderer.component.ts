import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.sass']
})
export class RendererComponent implements OnInit {

  number1: Observable<number>;
  number2: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.number1 = store.select('number1');
    this.number2 = store.select('number2');
  }

  ngOnInit() {
  }

}
