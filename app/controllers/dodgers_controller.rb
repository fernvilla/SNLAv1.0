class DodgersController < ApplicationController
  def index
    render json: Dodger.all
  end

  def official
    render json: Dodger.where(source: "Official Site")
  end

  def latimes
    render json: Dodger.where(source: "LA Times")
  end
end
