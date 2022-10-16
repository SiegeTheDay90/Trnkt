class Api::ShopsController < ApplicationController
    def create
    end
  
    def index
    end
  
    def show
      @shop = Shop.find(params[:id])
      if @shop
        @seller = User.find(@shop.seller_id)
        @cover_photo_url = @shop.cover_photo.url
        render :show
      else
        render json: nil
      end
    end
  end
  