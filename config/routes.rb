Rails.application.routes.draw do
  root "home#index"

  resources :sessions, only: [:create]

  get '*path', to: "home#index"
end
