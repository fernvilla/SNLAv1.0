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

  def api
    render json: Duck.all
  end

  def official
    render json: Duck.where(source: "Official Site")
  end

  def espn
    render json: Duck.where(source: "ESPN")
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
end
