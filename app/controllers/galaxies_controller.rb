class GalaxiesController < ApplicationController
  def index
    
  end

  def api
    render json: Galaxy.all
  end

  def official
    render json: Galaxy.where(source: "Official Site")
  end
end
