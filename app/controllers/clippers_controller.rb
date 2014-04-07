class ClippersController < ApplicationController
  def index
    render json: Clipper.all
  end
end
