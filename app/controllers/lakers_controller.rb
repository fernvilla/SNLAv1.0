class LakersController < ApplicationController
  def index
    render json: Laker.all
  end

  def official
    render json: Laker.where(source: "Official Site")
  end
end