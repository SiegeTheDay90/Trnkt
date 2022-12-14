class Api::ShopsController < ApplicationController

  def index
    @current_user = current_user

    if params[:num]
      num = params[:num].to_i
    else
      num = nil
    end

    if params[:title]
      @shops = Shop.where("name ILIKE '%#{params[:title]}%'").limit(num)
    elsif num
      @shops = Shop.all.sample(num)
    else
      @shops = Shop.all
    end

    render :index
  end

  def show
    @shop = Shop.find(params[:id])
    if @shop
      @products = @shop.products
      @seller = @shop.seller
      if current_user
        @liked = !(@shop.likes.where(user_id: current_user.id, likeable_id: @shop.id).empty?)
      else
        @liked = false
      end
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
  