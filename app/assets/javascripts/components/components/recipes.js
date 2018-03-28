import React, { Component, PropTypes } from 'react';
import  { NavLink } from 'react-router-dom';

class Recipe extends Component {

  render(){
    return(
      <div>
        <h1 className="page_header">Recipes</h1>
        
        <div class="list-group">
          {this.props.recipes.map(function(recipe) {

              return(
                <NavLink to={"/recipe/"+recipe.id} key={recipe.id}>
                  <a href="#" class="list-group-item list-group-item-success" style={{fontSize:'30px'}}>{recipe.title}</a>
                  <br />
                </NavLink>
                
              )
            })
          }
        </div>

      </div>
    )
  }
}


export default Recipe ;


