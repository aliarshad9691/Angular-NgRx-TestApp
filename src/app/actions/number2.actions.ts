import { Action } from '@ngrx/store';
import * as Number2ActionTypes from '../enums/number2-action-types.enums';

export class IncreaseNumber2 implements Action {
  readonly type = Number2ActionTypes.NumbersIncrease;
}

export class DecreaseNumber2 implements Action {
  readonly type = Number2ActionTypes.NumbersDecrease;
}

export type Actions = IncreaseNumber2 | DecreaseNumber2;
