class ChivasController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('cdchivasusa')
  end

  def api
    render json: Chiva.all
  end

  def official
    render json: Chiva.where(source: "Official Site")
  end

  def espn
    render json: Chiva.where(source: "ESPN")
  end
end
