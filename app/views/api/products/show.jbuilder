json.set! :product do
    json.extract! @product, :id, :name, :description, :price, :shop_id
    json.set! :photo_url, @product.thumbnail.url
    json.liked @liked
    json.type "product"
end

json.set! :shop do
    json.extract! @shop, :id, :name, :description, :seller_id, :sales, :rating, :state, :country, :created_at, :updated_at
    json.set! :cover_photo_url, @shop.cover_photo.url
    json.set! :photo_url, @shop.thumbnail.url
end
