class Api::FavoritesController < ApplicationController
  def index
    @favorites = current_user.favorites
  end

  def create
    @favorite = Favorite.new(favorite_params)
    @game = @favorite.game

    if @favorite.save
      render :show
    else 
      render json: @favorite.errors.full_messages, status: 422
    end 
  end

  def show 
    @favorite = Favorite.find(params[:id])
  end 

  def destroy
    @favorite = Favorite.find(params[:id])
    @game = @favorite.game
    @favorite.destroy

    render :show
  end
  
  private
  def favorite_params 
    params.require(:favorite).permit(:user_id, :game_id)
  end 
end


