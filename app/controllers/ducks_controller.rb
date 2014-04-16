class DucksController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('anaheimducks')
  end

  def instagram
    Instagram.configure do |config|
     config.client_id = ENV["INSTAGRAM_KEY"]
     config.client_secret = ENV["INSTAGRAM_SECRET"] 
     config.access_token = ENV["INSTAGRAM_ACCESS_TOKEN"]
    end
    render json: Instagram.user_recent_media(178233007)
  end

  def api
    render json: Duck.all
  end

  def official
    render json: Duck.where(source: "Official Site")
  end

  def espn
    render json: Duck.where(source: "ESPN")
  end

  def latimes
    render json: Duck.where(source: "LA Times")
  end

  def ocregister
    render json: Duck.where(source: "OC Register")
  end

  def dailynews
    render json: Duck.where(source: "Daily News")
  end

  def cbs
    render json: Duck.where(source: "CBS Los Angeles")
  end

  def anaheim_calling
    render json: Duck.where(source: "Anaheim Calling")
  end

  def on_the_duck_pond
    render json: Duck.where(source: "On the Duck Pond")
  end

  def bleacher_report
    render json: Duck.where(source: "Bleacher Report")
  end

  def fox_sports
    render json: Duck.where(source: "FOX Sports")
  end
end
