class Api::SessionsController < ApplicationController

  def show
    if current_user
      @user = current_user
      cart_value_pairs = Hash.new
      @user.cart_items.each {|item| cart_value_pairs[item.product_id] = item.quantity}
      @products = Product.where(id: cart_value_pairs.keys)
      @products.each {|product| product.quantity = cart_value_pairs[product.id]}
      render :show
    else
      render json: {user: nil}
    end
  end

  def update
    if current_user
      @user = current_user
      if (params['type'] == 'add' && CartItem.find_by(product_id: params['product_id'], buyer_id: current_user.id))
        ci = CartItem.find_by(product_id: params['product_id'], buyer_id: current_user.id)

        if ci.update(quantity: ci.quantity + params['quantity'].to_i)
        else
          render json: {errors: ["Invalid Cart Action"], status: 422}
        end

      elsif (params['type'] == 'add')
        ci = CartItem.new(buyer_id: current_user.id, product_id: params['product_id'], quantity: params['quantity'])
        if ci.save
        else
          render json: {errors: ["Invalid Cart Item"], status: 422}
        end

      elsif (params['type'] == 'remove')
        CartItem.find_by(product_id: params['product_id'], buyer_id: current_user.id).destroy
      elsif (params['type'] == 'clear')
        CartItem.where(buyer_id: current_user.id).each {|item| item.destroy}
      end

      cart_value_pairs = Hash.new
      @user.cart_items.each {|item| cart_value_pairs[item.product_id] = item.quantity}
      @products = Product.where(id: cart_value_pairs.keys)
      @products.each {|product| product.quantity = cart_value_pairs[product.id]}
      render :show

    else
      render json: {errors: ["No session user"], status: 403}
    end
  end

  def create
    @user = User.find_by_credentials(session_params[:credential], session_params[:password])
    if @user
      login!(@user)
      cart_value_pairs = Hash.new
      @user.cart_items.each {|item| cart_value_pairs[item.product_id] = item.quantity}
      @products = Product.where(id: cart_value_pairs.keys)
      @products.each {|product| product.quantity = cart_value_pairs[product.id]}
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