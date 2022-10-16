@shops.each do |shop|
    json.set! shop.id do
        json.extract! shop, :id, :name, :description, :state, :country, :rating, :sales, :seller_id
        json.set! :seller, shop.seller
    end
end