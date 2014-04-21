class FavoritesController < ApplicationController
  def index
    if !current_user
      redirect_to new_user_session_path
      flash[:alert] = "Must be logged in to view this page"
    else
      @favorites = current_user.favorites
    end
  end

  def api
    if current_user
      render json: current_user.favorites 
    else
      redirect_to new_user_session_path
    end
  end
end
