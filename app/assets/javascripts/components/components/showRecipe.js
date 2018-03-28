import React, { Component, PropTypes } from 'react';

var showRecipe = React.createClass({
  getInitialState() {
    return {
      title: "",
      description: "",
      ingredients: []
    };
  },

  componentDidMount() {
    var id = this.props.match.params.id ;
    $.getJSON('/recipes/'+id).done(function(result){
      this.setState({ 
        title: result.recipe.title,
        description: result.recipe.description,
        ingredients: result.ingredients

      });
    }.bind(this));
  },

  render: function() {
    return(
      <div>
        <h1 className="page_header">{this.state.title}</h1>
        
        <h4><u>Description</u></h4>
        <p>{this.state.description}</p>

        <h4><u>Ingredients</u></h4>
        <ul>
          {this.state.ingredients.map(function(ingredients) {
              return(
                <li>{ingredients}</li>
              )
            })
          }
         </ul>

      </div>
    )
  }
});


module.exports = showRecipe ;
