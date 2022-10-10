class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    # render json: user_params
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render json: {user: @user}
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def index
    @users = User.all

    render :index
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: {username: @user.username, email: @user.email}
    else
      render json: nil
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
