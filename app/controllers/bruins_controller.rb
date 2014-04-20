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

  def instagram
    Instagram.configure do |config|
     config.client_id = ENV["INSTAGRAM_KEY"]
     config.client_secret = ENV["INSTAGRAM_SECRET"] 
     config.access_token = ENV["INSTAGRAM_ACCESS_TOKEN"]
    end
    render json: Instagram.user_recent_media(43277415)
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

  def bleacher_report
    render json: Bruin.where(source: "Bleacher Report")
  end

  def fox_sports
    render json: Bruin.where(source: "FOX Sports")
  end

  def inside_ucla
    render json: Bruin.where(source: "Inside UCLA")
  end

  def bruins_nation
    render json: Bruin.where(source: "Bruins Nation")
  end

  def punting_is_winning
    render json: Bruin.where(source: "Punting is Winning")
  end

  def go_joe_bruin
    render json: Bruin.where(source: "Go Joe Bruin")
  end

  def bruin_247
    render json: Bruin.where(source: "Bruin 247")
  end

  def rivals
    render json: Bruin.where(source: "Rivals")
  end

  def scout
    render json: Bruin.where(source: "Scout")
  end

end
