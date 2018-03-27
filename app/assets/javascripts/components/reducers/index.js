import { combineReducers } from 'redux';
import AllRecipes from './all_recipes';

const rootReducer = combineReducers({
  list_recipes: AllRecipes
});

export default rootReducer;