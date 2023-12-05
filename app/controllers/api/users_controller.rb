class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new({first_name: params[:first_name], email: params[:email], password: params[:password]})

    if @user.save
      UserMailer.with(user: @user).welcome_email.deliver_now
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

  def reset_password
    confirm = Confirmation.find_by(code: params[:credential])
    
    if confirm
      @user = confirm.user
      @user.password = params[:password]
      if @user.save!
          login!(@user)
          render :show
      end
    else
      render json: {errors: ["Code mismatch."], status: 401}
    end
  end

  def request_reset
    @user = User.find_by(email: params[:credential])
    logger.debug("User to Reset: #{@user}")
    if @user
      confirmation = Confirmation.new(user_id: @user.id)
      if confirmation.save
        UserMailer.with(user: @user).reset_request.deliver_now
        render json: {message: "Success"}
      else
        render json: {errors: confirmation.errors.full_messages}, status: 422
      end
    end
  end
end
