Rails.application.routes.draw do
  root to: 'recipes#index'
  get '*path', to: 'recipes#index'
end
