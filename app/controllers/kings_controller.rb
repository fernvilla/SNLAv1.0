class KingsController < ApplicationController
  def index
    
  end

  def api
    render json: King.all
  end

  def official
    render json: King.where(source: "Official Site")
  end

  def latimes
    render json: King.where(source: "LA Times")
  end

  def espn
    render json: King.where(source: "ESPN")
  end

  def ocregister
    render json: King.where(source: "OC Register")
  end

  def dailynews
    render json: King.where(source: "Daily News")
  end
end
