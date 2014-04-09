class SparksController < ApplicationController
  def index
    
  end

  def api
    render json: Spark.all
  end

  def latimes
    render json: Spark.where(source: "LA Times")
  end
end
