class AngelsController < ApplicationController
  def index
    
  end

  def api
    render json: Angel.all
  end

  def official
    render json: Angel.where(source: "Official Site")
  end

  def latimes
    render json: Angel.where(source: "LA Times")
  end

  def espn
    render json: Angel.where(source: "ESPN")
  end

  def ocregister
    render json: Angel.where(source: "OC Register")
  end

  def dailynews
    render json: Angel.where(source: "Daily News")
  end
end
