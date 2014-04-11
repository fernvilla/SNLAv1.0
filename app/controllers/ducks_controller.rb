class DucksController < ApplicationController
  def index
    
  end

  def api
    render json: Duck.all
  end

  def official
    render json: Duck.where(source: "Official Site")
  end

  def espn
    render json: Duck.where(source: "ESPN")
  end

  def ocregister
    render json: Duck.where(source: "OC Register")
  end

  def dailynews
    render json: Duck.where(source: "Daily News")
  end
end
