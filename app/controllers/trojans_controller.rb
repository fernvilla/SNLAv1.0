class TrojansController < ApplicationController
  def index
    render json: Trojan.all
  end
end
