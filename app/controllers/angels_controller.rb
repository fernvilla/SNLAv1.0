class AngelsController < ApplicationController
  def index
    
  end

  def api
    render json: Angel.all
  end
end
