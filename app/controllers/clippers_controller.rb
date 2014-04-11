class ClippersController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('laclippers')
  end

  def api
    render json: Clipper.all
  end

  def official
    render json: Clipper.where(source: "Official Site")
  end

  def latimes
    render json: Clipper.where(source: "LA Times")
  end

  def espn
    render json: Clipper.where(source: "ESPN")
  end

  def ocregister
    render json: Clipper.where(source: "OC Register")
  end

  def dailynews
    render json: Clipper.where(source: "Daily News")
  end
end
