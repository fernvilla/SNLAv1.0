class TrojansController < ApplicationController
  def index
    
  end

  def twitter
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_KEY"]
      config.consumer_secret     = ENV["TWITTER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
    end
    render json: client.user_timeline('usc_athletics')
  end

  def instagram
    Instagram.configure do |config|
     config.client_id = ENV["INSTAGRAM_KEY"]
     config.client_secret = ENV["INSTAGRAM_SECRET"] 
     config.access_token = ENV["INSTAGRAM_ACCESS_TOKEN"]
    end
    render json: Instagram.user_recent_media(221439767)
  end

  def youtube
    client = YouTubeIt::Client.new(:dev_key => ENV["YOUTUBE_KEY"])
    render json: client.videos_by(:user => 'USCAthletics')
  end

  def api
    render json: Trojan.all
  end

  def official
    render json: Trojan.where(source: "Official Site")
  end

  def latimes
    render json: Trojan.where(source: "LA Times")
  end

  def espn
    render json: Trojan.where(source: "ESPN")
  end

  def ocregister
    render json: Trojan.where(source: "OC Register")
  end

  def bleacher_report
    render json: Trojan.where(source: "Bleacher Report")
  end

  def fox_sports
    render json: Trojan.where(source: "FOX Sports")
  end

  def inside_usc
    render json: Trojan.where(source: "Inside USC")
  end

  def conquest_chronicles
    render json: Trojan.where(source: "Conquest Chronicles")
  end

  def rivals
    render json: Trojan.where(source: "Rivals")
  end

  def scout
    render json: Trojan.where(source: "Scout")
  end
end
