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
end
