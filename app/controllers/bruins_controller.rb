class BruinsController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('uclaathletics')
  end

  def api
    render json: Bruin.all
  end

  def official
    render json: Bruin.where(source: "Official Site")
  end

  def latimes
    render json: Bruin.where(source: "LA Times")
  end

  def espn
    render json: Bruin.where(source: "ESPN")
  end

  def ocregister
    render json: Bruin.where(source: "OC Register")
  end
end
