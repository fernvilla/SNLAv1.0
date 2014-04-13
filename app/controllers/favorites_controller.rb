class FavoritesController < ApplicationController
  def index
    if current_user

    else
      redirect_to new_user_session_path
      flash[:alert] = "Must be logged in to view this page"
    end
  end

  def api
    if current_user
      render json: User.where(email: current_user.email) 
    else
      redirect_to new_user_session_path
      flash[:notice] = "Must be logged in to view this page"
    end
  end
end
