class FavoritesController < ApplicationController
  def index
    if !current_user
      redirect_to new_user_session_path
      flash[:alert] = "Must be logged in to view this page"
    end
  end

  def create
    favorite = Favorite.new
    favorite.user_id = params[:user_id]
    favorite.title = params[:title]
    favorite.save
    redirect_to favorites_path
  end

  def api
    if current_user
      render json: current_user.favorites
    else
      redirect_to new_user_session_path
    end
  end
end
