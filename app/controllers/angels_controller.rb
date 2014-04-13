class AngelsController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('angels')
  end

  def api
    render json: Angel.all
  end

  def official
    render json: Angel.where(source: "Official Site")
  end

  def latimes
    render json: Angel.where(source: "LA Times")
  end

  def espn
    render json: Angel.where(source: "ESPN")
  end

  def ocregister
    render json: Angel.where(source: "OC Register")
  end

  def dailynews
    render json: Angel.where(source: "Daily News")
  end

  def cbs
    render json: Angel.where(source: "CBS Los Angeles")
  end
end
