class Api::ShopsController < ApplicationController

  def index
    @shops = Shop.all
    @current_user = current_user
    render :index
  end

  def show
    @shop = Shop.find(params[:id])
    if @shop
      @products = @shop.products
      @seller = @shop.seller
      @liked = !(@shop.likes.where(user_id: current_user.id, likeable_id: @shop.id).empty?)
      render :show
    else
      render json: nil
    end
  end

  def update
    @shop = Shop.find(params[:id])
    if @shop
      @like = Like.find_by(likeable_id: params[:id], likeable_type: "Shop", user_id: current_user.id)
      if(@like)
        @like.destroy;
      else
        @like = Like.new(likeable_id: @shop.id, likeable_type: "Shop", user_id: current_user.id)
        @like.save
      end
      @products = @shop.products
      @seller = @shop.seller
      @liked = !(@shop.likes.where(user_id: current_user.id, likeable_id: @shop.id).empty?)
      render :show
    else
      render json: nil
    end
  end
  
end
  