class Api::SessionsController < ApplicationController

    # before_action :require_logged_out, only: [ :create]
    # before_action :require_logged_in, only: [:show, :destroy]


    def show
      if current_user
        render json: {user: current_user}
      else
        render json: {user: nil}
      end
    end

    def create
        @user = User.find_by_credentials(session_params[:credential], session_params[:password])
        if @user
          login!(@user)
        else
          @user = nil
        end

        render :show
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