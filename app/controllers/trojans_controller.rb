class TrojansController < ApplicationController
  def index
    
  end

  def api
    render json: Trojan.all
  end

  def latimes
    render json: Trojan.where(source: "LA Times")
  end
end
