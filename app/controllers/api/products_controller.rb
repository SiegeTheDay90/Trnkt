class Api::ProductsController < ApplicationController

    def index
      @products = Product.all
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
    