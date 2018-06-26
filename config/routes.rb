Rails.application.routes.draw do
  root "home#index"

  resources :sessions, only: [:create]
  resources :users, only: [:index, :create]

  get '*path', to: "home#index"
end
