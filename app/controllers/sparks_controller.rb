class SparksController < ApplicationController
  def index
    render json: Spark.all
  end
end
