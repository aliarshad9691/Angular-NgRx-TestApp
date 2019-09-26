import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as GenericActionTypes from '../enums/generic-action-types.enums';
import { mapTo, switchMap, takeUntil } from 'rxjs/operators';
import { IncreaseNumber1 } from '../actions/number1.actions';
import { DecreaseNumber2 } from '../actions/number2.actions';
import { timer } from 'rxjs';


@Injectable()
export class NumbersEffects {

  constructor(
    private actions$: Actions
  ) {
  }

  @Effect()
  change$ = this.actions$.pipe(
    ofType(GenericActionTypes.NumbersChange),
    switchMap(action => [
      new IncreaseNumber1(),
      new DecreaseNumber2(),
      new DecreaseNumber2()
    ])
  );

  @Effect()
  start$ = this.actions$.pipe(
    ofType(GenericActionTypes.NumbersStart),
    switchMap(action =>
      timer(0, 1000).pipe(
        takeUntil(this.actions$.pipe(ofType(GenericActionTypes.NumbersStop))),
        mapTo({type: GenericActionTypes.NumbersChange})
      )
    )
  );

}
