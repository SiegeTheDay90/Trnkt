class Api::ShopsController < ApplicationController

  def index
    @current_user = current_user || User.new(id: nil)

    num = params[:num] ? params[:num].to_i : nil

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
      @current_user = current_user || User.new(id: nil)
      @products = @shop.products
      @seller = @shop.seller
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
  