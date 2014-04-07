class ChivasController < ApplicationController
  def index
    render json: Chiva.all
  end
end
