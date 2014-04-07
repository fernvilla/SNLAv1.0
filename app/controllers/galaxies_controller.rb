class GalaxiesController < ApplicationController
  def index
    render json: Galaxy.all
  end
end
