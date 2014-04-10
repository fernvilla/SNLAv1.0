class PrepsController < ApplicationController
  def index
    
  end

  def api
    render json: Prep.all
  end

  def latimes
    render json: Prep.where(source: "LA Times")
  end
end
