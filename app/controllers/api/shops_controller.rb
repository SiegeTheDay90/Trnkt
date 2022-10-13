class Api::ShopsController < ApplicationController
    def create
    end
  
    def index
    end
  
    def show
      @shop = Shop.find(params[:id])
      if @shop
        @seller = User.find(@shop.seller_id)
        render json: @shop
      else
        render json: nil
      end
    end
  end
  