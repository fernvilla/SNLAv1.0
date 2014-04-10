class TrojansController < ApplicationController
  def index
    
  end

  def api
    render json: Trojan.all
  end

  def official
    render json: Trojan.where(source: "Official Site")
  end

  def latimes
    render json: Trojan.where(source: "LA Times")
  end

  def espn
    render json: Trojan.where(source: "ESPN")
  end

  def ocregister
    render json: Trojan.where(source: "OC Register")
  end
end
