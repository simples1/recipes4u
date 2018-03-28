import React, { Component, PropTypes } from 'react';
import  { NavLink } from 'react-router-dom';

class Recipe extends Component {

  render(){
    return(
      <div>
        <h1 className="page_header">Recipes</h1>
        
        <ul>
          {this.props.recipes.map(function(recipe) {

              return(
                <NavLink to={"/show/"+recipe.id} key={recipe.id}><li>{recipe.title}</li></NavLink>
                
              )
            })
          }
        </ul>

      </div>
    )
  }
}


export default Recipe ;
