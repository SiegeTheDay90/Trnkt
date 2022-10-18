json.user do
    json.extract! @user, :id, :first_name, :email, :created_at, :updated_at
end

json.set! :cart_items do
    @user.cart_items.each do |item|
        json.set! item.id, item
    end
end