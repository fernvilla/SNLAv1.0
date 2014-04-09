class BruinsController < ApplicationController
  def index
    render json: Bruin.all
  end

  def official
    render json: Bruin.where(source: "Official Site")
  end

  def latimes
    render json: Bruin.where(source: "LA Times")
  end
end
