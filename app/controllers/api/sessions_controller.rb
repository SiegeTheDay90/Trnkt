class Api::SessionsController < ApplicationController

  def show
    if current_user
      @user = current_user
      render :show
    else
      render json: {user: nil}
    end
  end

  def update
    if current_user
      @user = current_user
      ci = CartItem.new(buyer_id: current_user.id, product_id: params['product_id'], quantity: params['quantity'])

      if ci.save
        render :show
      else

        render json: {errors: ["Invalid Cart Item"], status: 422}

      end

    else

      render json: {errors: ["No session user"], status: 403}

    end
  end

  def create
    @user = User.find_by_credentials(session_params[:credential], session_params[:password])
    if @user
      login!(@user)
      render :show
    else
      @user = nil
      render json: {errors: ["Password was incorrect"], status: 422}
    end
  end

  def destroy
    user = current_user

    if user
      user.reset_session_token!
      session[:session_token] = nil
      render json: {messages: ['Successful'], status: 200}
    else
      render json: {errors: ['Unsuccessful'], status: 422}
    end
  end
end