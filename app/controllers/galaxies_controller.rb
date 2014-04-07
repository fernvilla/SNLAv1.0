class GalaxiesController < ApplicationController
  def index
    render json: Galaxy.all
  end

  def official
    render json: Galaxy.where(source: "Official Site")
  end
end
