class SparksController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('la_sparks')
  end

  def api
    render json: Spark.all
  end

  def latimes
    render json: Spark.where(source: "LA Times")
  end

  def espn
    render json: Spark.where(source: "ESPN")
  end

  def fox_sports
    render json: Spark.where(source: "FOX Sports")
  end
end
