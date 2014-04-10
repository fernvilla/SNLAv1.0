class DodgersController < ApplicationController
  def index
    
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
end
