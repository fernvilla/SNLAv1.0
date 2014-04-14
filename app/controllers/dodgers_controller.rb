class DodgersController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('dodgers')
  end

  def api
    render json: Dodger.all
  end

  def official
    render json: Dodger.where(source: "Official Site")
  end

  def latimes
    render json: Dodger.where(source: "LA Times")
  end

  def espn
    render json: Dodger.where(source: "ESPN")
  end

  def ocregister
    render json: Dodger.where(source: "OC Register")
  end

  def dailynews
    render json: Dodger.where(source: "Daily News")
  end

  def cbs
    render json: Dodger.where(source: "CBS Los Angeles")
  end

  def bleacher_report
    render json: Dodger.where(source: "Bleacher Report")
  end
end
