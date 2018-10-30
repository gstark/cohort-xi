Rails.application.routes.draw do
  resources :designers
  resources :games do
    resources :reviews
    resources :comments, only: [:create, :destroy]
  end

  root to: "home#index"
end
