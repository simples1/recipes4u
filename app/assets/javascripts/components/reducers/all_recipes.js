import { SET_RECIPES } from '../actions/myTypes';

export default function(state = 0, action) {
  switch (action.type) {
  case SET_RECIPES:
    return action.list_recipes;
  default:
    return state;
  }
}
