Rails.application.routes.draw do


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :games, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :favorites, only: [:show, :index, :create, :destroy]
    resources :searches, only: [:index]
    resources :reviews, only: [:create, :update, :destroy, :show]
    resource :session, only: [:create, :destroy, :show]
  end



  root "static_pages#root"
end
