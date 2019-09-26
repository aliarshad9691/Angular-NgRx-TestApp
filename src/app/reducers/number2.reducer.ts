import * as Number2Actions from '../actions/number2.actions';
import * as GenericActions from '../actions/generic.actions';
import * as Number2ActionTypes from '../enums/number2-action-types.enums';
import * as GenericActionTypes from '../enums/generic-action-types.enums';
import { number2InitialState } from '../initial-state/number2.initial-state';

export function number2Reducer(state: number = number2InitialState, action: Number2Actions.Actions | GenericActions.Actions) {
  switch (action.type) {
    case Number2ActionTypes.NumbersIncrease:
      return ++state;
    case Number2ActionTypes.NumbersDecrease:
      return --state;
    case GenericActionTypes.NumbersReset:
      return number2InitialState;
    default:
      return state;
  }
}
