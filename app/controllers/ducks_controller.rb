class DucksController < ApplicationController
  def index
    
  end

  def api
    render json: Duck.all
  end

  def official
    render json: Duck.where(source: "Official Site")
  end
end
