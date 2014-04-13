class PrepsController < ApplicationController
  def index
    
  end

  def twitter
    render json: "blank"
  end

  def api
    render json: Prep.all
  end

  def latimes
    render json: Prep.where(source: "LA Times")
  end

  def ocregister
    render json: Prep.where(source: "OC Register")
  end

  def dailynews
    render json: Prep.where(source: "Daily News")
  end

  def cbs
    render json: Prep.where(source: "CBS Los Angeles")
  end
end
