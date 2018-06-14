# class Api::FavoritesController < ApplicationController
#   def index
#     @games = User.params[:userId].favorited_games

#     render "api/games/index"
#   end

#   def create
#     @favorite = Favorite.new(favorite_params)
#     @game = @favorite.game

#     if @favorite.save
#       render "api/games/show"
#     else 
#       render json: @favorite.errors.full_messages, status: 422
#     end 
#   end

#   def destroy
#     @favorite = Favorite.find(params[:id])
#     @game = @favorite.game
#     @favorite.destroy

#     render "api/games/show"
#   end
  
#   private
#   def favorite_params 
#     params.require(:favorite).permit(:user_id, :game_id)
#   end 
# end


