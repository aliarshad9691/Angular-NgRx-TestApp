import { Action } from '@ngrx/store';
import * as Number1ActionTypes from '../enums/number1-action-types.enums';

export class IncreaseNumber1 implements Action {
  readonly type = Number1ActionTypes.NumbersIncrease;
}

export class DecreaseNumber1 implements Action {
  readonly type = Number1ActionTypes.NumbersDecrease;
}

export type Actions = IncreaseNumber1 | DecreaseNumber1;
