class PrepsController < ApplicationController
  def index
    
  end

  def api
    render json: Prep.all
  end
end
