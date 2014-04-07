class KingsController < ApplicationController
  def index
    render json: King.all
  end
end
