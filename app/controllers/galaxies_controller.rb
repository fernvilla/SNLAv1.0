class GalaxiesController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('lagalaxy')
  end

  def instagram
    Instagram.configure do |config|
     config.client_id = ENV["INSTAGRAM_KEY"]
     config.client_secret = ENV["INSTAGRAM_SECRET"] 
     config.access_token = ENV["INSTAGRAM_ACCESS_TOKEN"]
    end
    render json: Instagram.user_recent_media(20940324)
  end

  def api
    render json: Galaxy.all
  end

  def official
    render json: Galaxy.where(source: "Official Site")
  end

  def espn
    render json: Galaxy.where(source: "ESPN")
  end

  def lag_confidential
    render json: Galaxy.where(source: "LAG Confidential")
  end

  def corner_of_the_galaxy
    render json: Galaxy.where(source: "Corner of the Galaxy")
  end

  def bleacher_report
    render json: Galaxy.where(source: "Bleacher Report")
  end
end
