class Api::GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def show
    @game = Game.includes(:reviews).find(params[:id])
  end
end
