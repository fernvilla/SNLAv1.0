SportsNewsLA::Application.routes.draw do
  devise_for :users
  root "home#index"

  # Team index page routes
  get "bruins" => "bruins#index"
  get "lakers" => "lakers#index"
  get "dodgers" => "dodgers#index"
  get "clippers" => "clippers#index"
  get "kings" => "kings#index"
  get "trojans" => "trojans#index"
  get "sparks" => "sparks#index"
  get "galaxies" => "galaxies#index"
  get "chivas" => "chivas#index"
  get "angels" => "angels#index"
  get "ducks" => "ducks#index"
  get "preps" => "preps#index"

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
    get "/preps(.:format)" => "preps#api"

    # Routes to twitter feeds
    get "/lakers/twitter(.:format)" => "lakers#twitter"
    get "/dodgers/twitter(.:format)" => "dodgers#twitter"
    get "/clippers/twitter(.:format)" => "clippers#twitter"
    get "/kings/twitter(.:format)" => "kings#twitter"
    get "/bruins/twitter(.:format)" => "bruins#twitter"
    get "/ducks/twitter(.:format)" => "ducks#twitter"
    get "/angels/twitter(.:format)" => "angels#twitter"
    get "/trojans/twitter(.:format)" => "trojans#twitter"
    get "/galaxies/twitter(.:format)" => "galaxies#twitter"
    get "/chivas/twitter(.:format)" => "chivas#twitter"
    get "/sparks/twitter(.:format)" => "sparks#twitter"
    get "/preps/twitter(.:format)" => "preps#twitter"
 
    # Routes to stories from official team sites
    get "/lakers/official(.:format)" => "lakers#official"
    get "/clippers/official(.:format)" => "clippers#official"
    get "/dodgers/official(.:format)" => "dodgers#official"
    get "/kings/official(.:format)" => "kings#official"
    get "/galaxies/official(.:format)" => "galaxies#official"
    get "/chivas/official(.:format)" => "chivas#official"  
    get "/bruins/official(.:format)" => "bruins#official" 
    get "/ducks/official(.:format)" => "ducks#official" 
    get "/angels/official(.:format)" => "angels#official" 
    get "/trojans/official(.:format)" => "trojans#official" 

    # Routes to stories from LA Times
    get "/lakers/latimes(.:format)" => "lakers#latimes"
    get "/clippers/latimes(.:format)" => "clippers#latimes"
    get "/dodgers/latimes(.:format)" => "dodgers#latimes"
    get "/kings/latimes(.:format)" => "kings#latimes"
    get "/trojans/latimes(.:format)" => "trojans#latimes"
    get "/bruins/latimes(.:format)" => "bruins#latimes"
    get "/sparks/latimes(.:format)" => "sparks#latimes"
    get "/preps/latimes(.:format)" => "preps#latimes"
    get "/angels/latimes(.:format)" => "angels#latimes"

    # Routes to stories from ESPN
    get "/lakers/espn(.:format)" => "lakers#espn"
    get "/clippers/espn(.:format)" => "clippers#espn"
    get "/dodgers/espn(.:format)" => "dodgers#espn"
    get "/kings/espn(.:format)" => "kings#espn"
    get "/trojans/espn(.:format)" => "trojans#espn"
    get "/bruins/espn(.:format)" => "bruins#espn"
    get "/sparks/espn(.:format)" => "sparks#espn"
    get "/angels/espn(.:format)" => "angels#espn"
    get "/chivas/espn(.:format)" => "chivas#espn"
    get "/galaxies/espn(.:format)" => "galaxies#espn"
    get "/ducks/espn(.:format)" => "ducks#espn"

    # Routes to stories from OC Register
    get "/preps/ocregister(.:format)" => "preps#ocregister"
    get "/lakers/ocregister(.:format)" => "lakers#ocregister"
    get "/angels/ocregister(.:format)" => "angels#ocregister"
    get "/clippers/ocregister(.:format)" => "clippers#ocregister"
    get "/dodgers/ocregister(.:format)" => "dodgers#ocregister"
    get "/ducks/ocregister(.:format)" => "ducks#ocregister"
    get "/kings/ocregister(.:format)" => "kings#ocregister"
    get "/bruins/ocregister(.:format)" => "bruins#ocregister"
    get "/trojans/ocregister(.:format)" => "trojans#ocregister"

    # Routes to stories from Daily News
    get "/angels/dailynews(.:format)" => "angels#dailynews"
    get "/clippers/dailynews(.:format)" => "clippers#dailynews"
    get "/dodgers/dailynews(.:format)" => "dodgers#dailynews"
    get "/ducks/dailynews(.:format)" => "ducks#dailynews"
    get "/preps/dailynews(.:format)" => "preps#dailynews"
    get "/kings/dailynews(.:format)" => "kings#dailynews"
    get "/lakers/dailynews(.:format)" => "lakers#dailynews"

    # Routes to stories from CBS Los Angeles
    get "/lakers/cbs(.:format)" => "lakers#cbs"
    get "/clippers/cbs(.:format)" => "clippers#cbs"
    get "/dodgers/cbs(.:format)" => "dodgers#cbs"
    get "/angels/cbs(.:format)" => "angels#cbs"
    get "/kings/cbs(.:format)" => "kings#cbs"
    get "/ducks/cbs(.:format)" => "ducks#cbs"
    get "/preps/cbs(.:format)" => "preps#cbs"
  end
end