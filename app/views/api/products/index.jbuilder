@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :price, :shop_id
        json.set! :shop, product.shop
        json.set! :photo_url, product.thumbnail.url
        json.liked product.liked?(@current_user.id)
        json.type "product"
    end
end