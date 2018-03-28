import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import Recipes from "./recipes"
import RecipeForm from "./recipeForm"
import showRecipe from "./showRecipe"


class Homepage extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="container">
          <div className="row my_main_row">
          <NavLink to='/recipes/new'>
            <button className="btn btn-primary">New Recipe</button>
          </NavLink>

            <div className="col-md-12 main_wrapper box">
              <Route exact path="/" render={(props) => ( <Recipes recipes={this.props.list_recipes}/> )} />
              <Route path='/recipes/new' component={RecipeForm} />
              <Route path='/show/:id' component={showRecipe} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default Homepage;

