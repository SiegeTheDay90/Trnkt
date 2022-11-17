Rails.application.routes.draw do
  # get 'users/show'
  # get 'users/update'
  # get 'users/create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:show, :create, :destroy, :update]
    resources :shops, only: [:show, :index, :update]
    resources :products, only: [:show, :index, :update]
  end


  get '*path', to: "static_pages#frontend_index"

end
