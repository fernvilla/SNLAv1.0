class ClippersController < ApplicationController
  def index
    
  end

  def api
    render json: Clipper.all
  end

  def official
    render json: Clipper.where(source: "Official Site")
  end

  def latimes
    render json: Clipper.where(source: "LA Times")
  end

  def espn
    render json: Clipper.where(source: "ESPN")
  end
end
