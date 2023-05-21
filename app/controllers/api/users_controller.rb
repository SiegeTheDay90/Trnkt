class UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new({first_name: params[:first_name], email: params[:email], password: params[:password]})

    if @user.save
      login!(@user)
      render json: {user: {email: @user.email, firstName: @user.first_name}}
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
      render json: {id: @user.id, firstName: @user.first_name, lastName: @user.last_name, email: @user.email}
    else
      render json: {errors: ["User does not exist."], status: 422}
    end
  end
end
