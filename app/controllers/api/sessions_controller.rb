class Api::SessionsController < ApplicationController

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
      render json: {user: {email: @user.email, firstName: @user.first_name}}
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