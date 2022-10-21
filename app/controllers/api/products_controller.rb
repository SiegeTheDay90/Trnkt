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
      render :show
    else
      render json: nil
    end
  end
end