class Api::ShopsController < ApplicationController

  def index
    @shops = Shop.all
    render :index
  end

  def show
    @shop = Shop.find(params[:id])
    if @shop
      @products = @shop.products
      @seller = @shop.seller
      render :show
    else
      render json: nil
    end
  end
  
end
  