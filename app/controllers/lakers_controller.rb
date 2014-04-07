class LakersController < ApplicationController
  def index
    render json: Laker.all
  end
end