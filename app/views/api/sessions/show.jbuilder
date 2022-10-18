json.user do
    json.extract! @user, :id, :first_name, :email, :created_at, :updated_at
end

json.set! :cart do
    @products.each do |product|
        json.set! product.id do
            json.extract! product, :id, :name, :price, :description, :shop_id, :created_at, :updated_at
            json.set! :photo_url, product.thumbnail.url
            json.set! :quantity, product.quantity
        end
    end
end