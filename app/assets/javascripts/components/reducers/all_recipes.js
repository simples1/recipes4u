import { SET_RECIPES } from '../actions/myTypes';

export default function(state = [], action) {
  switch (action.type) {
  case SET_RECIPES:
    return action.payload;
  default:
    return state;
  }
}
