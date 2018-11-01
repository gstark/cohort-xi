Rails.application.routes.draw do
  get "/games", to: "games#index", as: "games"
  post "/games", to: "games#create"
  get "/games/new", to: "games#new", as: "new_game"
  get "/games/:id", to: "games#show", as: "game"
end
