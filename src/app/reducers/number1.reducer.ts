import * as Number1Actions from '../actions/number1.actions';
import * as GenericActions from '../actions/generic.actions';
import * as Number1ActionTypes from '../enums/number1-action-types.enums';
import * as GenericActionTypes from '../enums/generic-action-types.enums';
import { number1InitialState } from '../initial-state/number1.initial-state';

export function number1Reducer(state: number = number1InitialState, action: Number1Actions.Actions | GenericActions.Actions) {
  switch (action.type) {
    case Number1ActionTypes.NumbersIncrease:
      return ++state;
    case Number1ActionTypes.NumbersDecrease:
      return --state;
    case GenericActionTypes.NumbersReset:
      return number1InitialState;
    default:
      return state;
  }
}
