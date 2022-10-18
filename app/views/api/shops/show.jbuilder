json.set! :shop do 
    json.extract! @shop, :id, :name, :description, :seller_id, :sales, :rating, :state, :country, :created_at, :updated_at
    json.set! :cover_photo_url, @shop.cover_photo.url
    json.set! :photo_url, @shop.thumbnail.url
end

json.set! :seller do 
    json.extract! @seller, :id, :first_name, :last_name, :email
    json.set! :photo_url, @seller.thumbnail.url
end

json.set! :products do 
    @shop.products.each do |product|
        json.set! product.id do
            json.extract! product, :id, :name, :price, :description, :shop_id, :created_at, :updated_at
            json.set! :photo_url, product.thumbnail.url
        end
    end
end
