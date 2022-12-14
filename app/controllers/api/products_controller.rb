class Api::ProductsController < ApplicationController
  def index
    if params[:num]
      num = params[:num].to_i
    else
      num = nil
    end
    if params[:title]
      @products = Product.where("name ILIKE '%#{params[:title]}%'").limit(num)
    elsif num
      @products = Product.all.sample(num)
    else
      @products = Product.all
    end
    render :index
  end

  def show
    @product = Product.find(params[:id])
    if @product
      @shop = @product.shop
      @liked = !(@product.likes.where(user_id: current_user.id, likeable_id: @product.id).empty?)
      render :show
    else
      render json: nil
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product
      @like = Like.find_by(likeable_id: params[:id], likeable_type: "Product", user_id: current_user.id)
      if(@like)
        @like.destroy;
      else
        @like = Like.new(likeable_id: @product.id, likeable_type: "Product", user_id: current_user.id)
        @like.save
      end
      @shop = @product.shop
      @liked = !(@product.likes.where(user_id: current_user.id, likeable_id: @product.id).empty?)
      render :show
    else
      render json: nil
    end
  end
end