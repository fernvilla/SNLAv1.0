class BruinsController < ApplicationController
  def index
    render json: Bruin.all
  end
end
