class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def show
    recipe = Recipe.find_by_id(params[:id])
    render json: {recipe: recipe, ingredients: recipe.ingredients.pluck(:name)}
  end

  def save
    @recipe = Recipe.new()
    @recipe.title = params[:title]
    @recipe.description = params[:description]

    params[:ingredients].values.each do |ingredient|
      @recipe.ingredients.build(name: ingredient['name'])
    end

    if @recipe.save
      render json: { status: 200 }
    else
      render json: { msg: "problems saving recipe" }
    end
  end
end

