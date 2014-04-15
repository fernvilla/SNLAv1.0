class LakersController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('lakers')
  end

  def instagram
    Instagram.configure do |config|
     config.client_id = ENV["INSTAGRAM_KEY"]
     config.client_secret = ENV["INSTAGRAM_SECRET"] 
     config.access_token = ENV["INSTAGRAM_ACCESS_TOKEN"]
    end
    render json: Instagram.user_recent_media(16917874)
  end

  def tumblr
    Tumblr.configure do |config|
      config.consumer_key = ENV["TUMBLR_KEY"]
      config.consumer_secret = ENV["TUMBLR_SECRET"]
      # config.oauth_token = "access_token"
      # config.oauth_token_secret = "access_token_secret"
    end
    client = Tumblr::Client.new(:client => :httpclient)
    render json: client.posts("lakers.tumblr.com", :limit => 7)
  end

  def api
    render json: Laker.all
  end

  def official
    render json: Laker.where(source: "Official Site")
  end

  def latimes
    render json: Laker.where(source: "LA Times")
  end

  def espn
    render json: Laker.where(source: "ESPN")
  end

  def ocregister
    render json: Laker.where(source: "OC Register")
  end

  def dailynews
    render json: Laker.where(source: "Daily News")
  end

  def cbs
    render json: Laker.where(source: "CBS Los Angeles")
  end

  def bleacher_report
    render json: Laker.where(source: "Bleacher Report")
  end

  def inside_the_lakers
    render json: Laker.where(source: "Inside the Lakers")
  end

  def lakers_nation
    render json: Laker.where(source: "Lakers Nation")
  end

  def forum_blue_and_gold
    render json: Laker.where(source: "Forum Blue and Gold")
  end

  def silver_screen_and_roll
    render json: Laker.where(source: "Silver Screen and Roll")
  end

  def laker_nation
    render json: Laker.where(source: "Laker Nation")
  end

  def lakerholicz
    render json: Laker.where(source: "Lakerholicz")
  end

  def lake_show_life
    render json: Laker.where(source: "Lake Show Life")
  end

  def la_sports_hub
    render json: Laker.where(source: "LA Sports Hub")
  end

  def fansided
    render json: Laker.where(source: "Fansided")
  end
end