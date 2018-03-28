import React, { Component, PropTypes } from 'react';

var recipeForm = React.createClass({

  getInitialState() {
    return {
      title: "",
      description: "",
      ingredients: [{name: "ccc"}]
    };
  },

  handleSubmit(event){
    event.preventDefault()
    var form_data = {}
    var elements = $("#recipeFormform").serializeArray()
    for (var i=0; i < elements.length; i++) {
      form_data[elements[i].name] = elements[i].value
    } 

    form_data['ingredients'] = this.state.ingredients

    $.post('/save/recipe', form_data).done(function(result){
      if(result.status == '200'){
        window.location.replace('/');
      }else{
        alert(result.msg)
      }

    }.bind(this));
  },
  onChangeOptionText(e){
    var index = $(e.target).attr('id')
    this.state.ingredients[index].name = e.target.value
    this.setState({ ingredients: this.state.ingredients });
  },

  render: function() {
    var style = {
      width: '100%',
      height: '500px'
    };
    return(
      <div>
        <h1 className="page_header">New Recipe</h1>

        <form id='recipeFormform' onSubmit={this.handleSubmit}  >
          <label htmlFor="title">Title</label> <br />
          <input type="text" name="title" style={{width: '100%'}} /> <br />

          <label htmlFor="title">Description</label>
          <textarea name="description" style={style} defaultValue="Type here.." />

          {this.state.ingredients.map(function(ingredient, i) {
              return(
                <input type="text" className="ingredients_inputs" key={i} id={i} value={ingredient.name} onChange={this.onChangeOptionText}  />
              )
            }.bind(this))
          }

          <br />
          <br />
          <input type="submit" className="btn btn-success" />

        </form>
      </div>
    )
  }
});


module.exports = recipeForm ;






