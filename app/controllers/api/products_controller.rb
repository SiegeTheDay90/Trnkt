class Api::ProductsController < ApplicationController

    def index
      if params[:num]
        @products = Product.all.sample(params[:num].to_i)
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
    