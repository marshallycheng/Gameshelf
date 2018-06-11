class Api::ReviewsController < ApplicationController

  before_action :require_logged_in, only: [:create, :edit, :destroy]
  def index
    @reviews = Game.find(params[:game_id]).reviews
  end

  def show

  end

  def edit
    @review = current_user.find(params[:id])

    if @review.update_attributes(review_params)
      render :show
      # should return review content at the end. review partial
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.game_id = params[:game_id]

    if @review.save
      render :show
      # render index?. review partial to return new review instead. append
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = current_user.find(params[:id])
    @review.destroy

    render :show
    # anything else? consult pokemon controller
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating)
  end
end
