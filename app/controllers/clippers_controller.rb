class ClippersController < ApplicationController
  def index
    render json: Clipper.all
  end

  def official
    render json: Clipper.where(source: "Official Site")
  end
end
