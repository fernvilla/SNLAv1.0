class KingsController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('lakings')
  end

  def api
    render json: King.all
  end

  def official
    render json: King.where(source: "Official Site")
  end

  def latimes
    render json: King.where(source: "LA Times")
  end

  def espn
    render json: King.where(source: "ESPN")
  end

  def ocregister
    render json: King.where(source: "OC Register")
  end

  def dailynews
    render json: King.where(source: "Daily News")
  end
end
