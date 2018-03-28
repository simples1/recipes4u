import React, { Component, PropTypes } from 'react';

var recipeForm = React.createClass({

  getInitialState() {
    return {
      title: "",
      description: "",
      ingredients: [{name: ""}, {name: ""}]
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
  addMoreIngredient(e){
    e.preventDefault()
    this.state.ingredients.push({ name: "" })
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
          <div class="form-group">
            <label htmlFor="title">Title</label> <br />
            <input type="text" name="title" className="form-control" /> <br />

            <label htmlFor="desc">Description</label>
            <textarea name="description" style={style} placeHolder="Type here.." className="form-control" />

            <label htmlFor="ingredients">Ingredients</label><br />
            {this.state.ingredients.map(function(ingredient, i) {
                return(
                  <div>
                    <span>{i+1}</span><input type="text" className="ingredients_inputs form-control" key={i} id={i} value={ingredient.name} onChange={this.onChangeOptionText} style={{width: '50%'}} /> <br /> <br />
                   </div>
                )
              }.bind(this))
            }

            <br />
            <br />
            <button id="add_more" onClick={this.addMoreIngredient} className="btn btn-primary btn-lg" >Add more ingredients</button>
            <input type="submit" className="btn btn-success btn-lg btn-block" style={{marginTop: '5%'}} />
          </div>
        </form>
      </div>
    )
  }
});


module.exports = recipeForm ;






