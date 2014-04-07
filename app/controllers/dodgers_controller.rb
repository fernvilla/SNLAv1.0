class DodgersController < ApplicationController
  def index
    render json: Dodger.all
  end
end
