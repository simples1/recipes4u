import {SET_RECIPES} from './myTypes';

export function setRecipes(details) {
  return {
    type: SET_RECIPES,
    list_recipes: details
  };
}


