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

  def instagram
    Instagram.configure do |config|
     config.client_id = ENV["INSTAGRAM_KEY"]
     config.client_secret = ENV["INSTAGRAM_SECRET"] 
     config.access_token = ENV["INSTAGRAM_ACCESS_TOKEN"]
    end
    render json: Instagram.user_recent_media(22040747)
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

  def the_goat_parade
    render json: Chiva.where(source: "The Goat Parade")
  end

  def bleacher_report
    render json: Chiva.where(source: "Bleacher Report")
  end
end
