import React, { Component, PropTypes } from 'react';
import Markdown from 'react-remarkable'


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
    $.getJSON('/show/'+id).done(function(result){
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
         <Markdown source={this.state.description} />

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
