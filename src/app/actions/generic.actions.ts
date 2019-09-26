import { Action } from '@ngrx/store';
import * as GenericActionTypes from '../enums/generic-action-types.enums';

export class ChangeNumbers implements Action {
  readonly type = GenericActionTypes.NumbersChange;
}

export class ResetNumbers implements Action {
  readonly type = GenericActionTypes.NumbersReset;
}

export class StartNumbers implements Action {
  readonly type = GenericActionTypes.NumbersStart;
}

export class StopNumbers implements Action {
  readonly type = GenericActionTypes.NumbersStop;
}

export type Actions = ChangeNumbers | ResetNumbers | StartNumbers | StopNumbers;
