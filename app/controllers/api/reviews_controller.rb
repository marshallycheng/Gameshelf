class Api::ReviewsController < ApplicationController

  before_action :require_logged_in, only: [:create, :edit, :destroy]
  def index
    @reviews = Game.find(params[:game_id]).reviews
  end

  def show
    @review = Review.find(params[:id])
  end

  def update
    @review = current_user.reviews.find(params[:id])

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

    if @review.save
      render :show
      # state will merge, only update new
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    @review.destroy

    render :show
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :game_id)
  end
end
