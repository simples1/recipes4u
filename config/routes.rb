Rails.application.routes.draw do
  root to: 'recipes#index'
  get "/show/:id", to: "recipes#show"
  post "/save/recipe", to: "recipes#save"

  
  get '*path', to: 'recipes#index'
end
