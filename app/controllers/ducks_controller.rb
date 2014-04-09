class DucksController < ApplicationController
  def index
    
  end

  def api
    render json: Duck.all
  end
end
