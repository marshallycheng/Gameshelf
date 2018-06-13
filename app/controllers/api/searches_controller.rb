class Api::SearchesController < ApplicationController
  def index
    @games = Game.search_by_title(params[:search][:title])

    render "api/games/index"
  end
end
