class AngelsController < ApplicationController
  def index
    
  end

  def api
    render json: Angel.all
  end

  def official
    render json: Angel.where(source: "Official Site")
  end

  def latimes
    render json: Angel.where(source: "LA Times")
  end
end
