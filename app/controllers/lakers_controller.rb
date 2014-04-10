class LakersController < ApplicationController
  def index
    
  end

  def api
    render json: Laker.all
  end

  def official
    render json: Laker.where(source: "Official Site")
  end

  def latimes
    render json: Laker.where(source: "LA Times")
  end

  def espn
    render json: Laker.where(source: "ESPN")
  end
end