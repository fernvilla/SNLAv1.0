SportsNewsLA::Application.routes.draw do
  root "home#index"

  get "bruins" => "bruins#index"
  get "/lakers" => "lakers#index"
  get "/dodgers" => "dodgers#index"
  get "/clippers" => "clippers#index"
  get "/kings" => "kings#index"
  get "/trojans" => "trojans#index"
  get "/sparks" => "sparks#index"
  get "/galaxies" => "galaxies#index"
  get "/chivas" => "chivas#index"
  get "/angels" => "angels#index"
  get "/ducks" => "ducks#index"

  scope :api do
    # Routes to all stories
    get "/lakers(.:format)" => "lakers#api"
    get "/dodgers(.:format)" => "dodgers#api"
    get "/clippers(.format)" => "clippers#api"
    get "/kings(.:format)" => "kings#api"
    get "/bruins(.:format)" => "bruins#api"
    get "/trojans(.:format)" => "trojans#api"
    get "/sparks(.:format)" => "sparks#api"
    get "/galaxies(.:format)" => "galaxies#api"
    get "/chivas(.:format)" => "chivas#api"
    get "/angels(.:format)" => "angels#api"
    get "/ducks(.:format)" => "ducks#api"
 
    # Routes to stories from official team sites
    get "/lakers/official(.:format)" => "lakers#official"
    get "/clippers/official(.:format)" => "clippers#official"
    get "/dodgers/official(.:format)" => "dodgers#official"
    get "/kings/official(.:format)" => "kings#official"
    get "/galaxies/official(.:format)" => "galaxies#official"
    get "/chivas/official(.:format)" => "chivas#official"  
    get "/bruins/official(.:format)" => "bruins#official" 

    # Routes to stories from LA Times
    get "/lakers/latimes(.:format)" => "lakers#latimes"
    get "/clippers/latimes(.:format)" => "clippers#latimes"
    get "/dodgers/latimes(.:format)" => "dodgers#latimes"
    get "/kings/latimes(.:format)" => "kings#latimes"
    get "/trojans/latimes(.:format)" => "trojans#latimes"
    get "/bruins/latimes(.:format)" => "bruins#latimes"
    get "/sparks/latimes(.:format)" => "sparks#latimes"
  end
end