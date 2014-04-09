class ChivasController < ApplicationController
  def index
    
  end

  def api
    render json: Chiva.all
  end

  def official
    render json: Chiva.where(source: "Official Site")
  end
end
