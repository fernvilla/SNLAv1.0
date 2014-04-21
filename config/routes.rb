SportsNewsLA::Application.routes.draw do
  root "home#index"

  devise_for :users, :controllers => {:omniauth_callbacks => "omniauth_callbacks"}
  
  get "favorites" => "favorites#index"
  get "api/favorites" => "favorites#api"

  # Team index page routes
  get "bruins" => "bruins#index"
  get "lakers" => "lakers#index"
  get "dodgers" => "dodgers#index"
  get "clippers" => "clippers#index"
  get "kings" => "kings#index"
  get "trojans" => "trojans#index"
  get "sparks" => "sparks#index"
  get "galaxy" => "galaxies#index"
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
    get "/galaxy(.:format)" => "galaxies#api"
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
    get "/galaxy/twitter(.:format)" => "galaxies#twitter"
    get "/chivas/twitter(.:format)" => "chivas#twitter"
    get "/sparks/twitter(.:format)" => "sparks#twitter"
    get "/preps/twitter(.:format)" => "preps#twitter"

    # Routes to instagram feed
    get "/lakers/instagram(.:format)" => "lakers#instagram"
    get "/clippers/instagram(.:format)" => "clippers#instagram"
    get "/dodgers/instagram(.:format)" => "dodgers#instagram"
    get "/angels/instagram(.:format)" => "angels#instagram"
    get "/kings/instagram(.:format)" => "kings#instagram"
    get "/ducks/instagram(.:format)" => "ducks#instagram"
    get "/bruins/instagram(.:format)" => "bruins#instagram"
    get "/trojans/instagram(.:format)" => "trojans#instagram"
    get "/sparks/instagram(.:format)" => "sparks#instagram"
    get "/galaxy/instagram(.:format)" => "galaxies#instagram"
    get "/chivas/instagram(.:format)" => "chivas#instagram"

    # Routes to tumblr feed
    get "/lakers/tumblr(.:format)" => "lakers#tumblr"
    get "/angels/tumblr(.:format)" => "angels#tumblr"
    get "/dodgers/tumblr(.:format)" => "dodgers#tumblr"
    get "/ducks/tumblr(.:format)" => "ducks#tumblr"

    # Routes to youtube feed
    get "/bruins/youtube(.:format)" => "bruins#youtube"
    get "/clippers/youtube(.:format)" => "clippers#youtube"
    get "/kings/youtube(.:format)" => "kings#youtube"
    get "/ducks/youtube(.:format)" => "ducks#youtube"
    get "/trojans/youtube(.:format)" => "trojans#youtube"
    get "/galaxy/youtube(.:format)" => "galaxies#youtube"
    get "/chivas/youtube(.:format)" => "chivas#youtube"
    get "/lakers/youtube(.:format)" => "lakers#youtube"
 
    # Routes to stories from official team sites
    get "/lakers/official(.:format)" => "lakers#official"
    get "/clippers/official(.:format)" => "clippers#official"
    get "/dodgers/official(.:format)" => "dodgers#official"
    get "/kings/official(.:format)" => "kings#official"
    get "/galaxy/official(.:format)" => "galaxies#official"
    get "/chivas/official(.:format)" => "chivas#official"  
    get "/bruins/official(.:format)" => "bruins#official" 
    get "/ducks/official(.:format)" => "ducks#official" 
    get "/angels/official(.:format)" => "angels#official" 
    get "/trojans/official(.:format)" => "trojans#official" 
    get "/lakers/nba(.:format)" => "lakers#nba" 

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
    get "/ducks/latimes(.:format)" => "ducks#latimes"
    get "/chivas/latimes(.:format)" => "chivas#latimes"
    get "/galaxy/latimes(.:format)" => "galaxies#latimes"

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
    get "/galaxy/espn(.:format)" => "galaxies#espn"
    get "/ducks/espn(.:format)" => "ducks#espn"
    get "/preps/espn(.:format)" => "preps#espn"

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

    # Routes to stories from Bleacher Report
    get "/lakers/bleacher_report(.:format)" => "lakers#bleacher_report"
    get "/clippers/bleacher_report(.:format)" => "clippers#bleacher_report"
    get "/angels/bleacher_report(.:format)" => "angels#bleacher_report"
    get "/dodgers/bleacher_report(.:format)" => "dodgers#bleacher_report"
    get "/bruins/bleacher_report(.:format)" => "bruins#bleacher_report"
    get "/trojans/bleacher_report(.:format)" => "trojans#bleacher_report"
    get "/ducks/bleacher_report(.:format)" => "ducks#bleacher_report"
    get "/kings/bleacher_report(.:format)" => "kings#bleacher_report"
    get "/chivas/bleacher_report(.:format)" => "chivas#bleacher_report"
    get "/galaxy/bleacher_report(.:format)" => "galaxies#bleacher_report"

    # Routes to stories from Fox Sports
    get "/lakers/fox_sports(.:format)" => "lakers#fox_sports"
    get "/clippers/fox_sports(.:format)" => "clippers#fox_sports"
    get "/angels/fox_sports(.:format)" => "angels#fox_sports"
    get "/dodgers/fox_sports(.:format)" => "dodgers#fox_sports"
    get "/bruins/fox_sports(.:format)" => "bruins#fox_sports"
    get "/trojans/fox_sports(.:format)" => "trojans#fox_sports"
    get "/ducks/fox_sports(.:format)" => "ducks#fox_sports"
    get "/kings/fox_sports(.:format)" => "kings#fox_sports"
    get "/sparks/fox_sports(.:format)" => "sparks#fox_sports"

    # Routes to stories from LA Sports Hub
    get "/lakers/la_sports_hub(.:format)" => "lakers#la_sports_hub"

    # Routes to Lakers blogs
    get "/lakers/inside_the_lakers(.:format)" => "lakers#inside_the_lakers"
    get "/lakers/lakers_nation(.:format)" => "lakers#lakers_nation"
    get "/lakers/forum_blue_and_gold(.:format)" => "lakers#forum_blue_and_gold"
    get "/lakers/silver_screen_and_roll(.:format)" => "lakers#silver_screen_and_roll"
    get "/lakers/laker_nation(.:format)" => "lakers#laker_nation"
    get "/lakers/lakerholicz(.:format)" => "lakers#lakerholicz"
    get "/lakers/lake_show_life(.:format)" => "lakers#lake_show_life"
    get "/lakers/fansided(.:format)" => "lakers#fansided"
    get "/lakers/hoops_hype(.:format)" => "lakers#hoops_hype"
    get "/lakers/triple_threat(.:format)" => "lakers#triple_threat"

    # Routes to Galaxy blogs
    get "/galaxy/lag_confidential(.:format)" => "galaxies#lag_confidential"
    get "/galaxy/corner_of_the_galaxy(.:format)" => "galaxies#corner_of_the_galaxy"

    # Routes to Chivas blogs
    get "/chivas/the_goat_parade(.:format)" => "chivas#the_goat_parade"

    # Routes to Ducks blogs
    get "/ducks/anaheim_calling(.:format)" => "ducks#anaheim_calling"
    get "/ducks/on_the_duck_pond(.:format)" => "ducks#on_the_duck_pond"

    # Routes to Bruins blogs
    get "/bruins/inside_ucla(.:format)" => "bruins#inside_ucla"
    get "/bruins/bruins_nation(.:format)" => "bruins#bruins_nation"
    get "/bruins/punting_is_winning(.:format)" => "bruins#punting_is_winning"
    get "/bruins/go_joe_bruin(.:format)" => "bruins#go_joe_bruin"
    get "/bruins/bruin_247(.:format)" => "bruins#bruin_247"
    get "/bruins/rivals(.:format)" => "bruins#rivals"
    get "/bruins/scout(.:format)" => "bruins#scout"

    # Routes to Trojans blogs
    get "/trojans/inside_usc(.:format)" => "trojans#inside_usc"
    get "/trojans/conquest_chronicles(.:format)" => "trojans#conquest_chronicles"
    get "/trojans/rivals(.:format)" => "trojans#rivals"
    get "/trojans/scout(.:format)" => "trojans#scout"
  end
end