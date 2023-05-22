json.set! :shops do
    @shops.each do |shop|
        json.set! shop.id do
            json.extract! shop, :id, :name, :description, :state, :country, :rating, :sales, :seller_id
            json.set! :photo_url, shop.thumbnail.url
            json.set! :cover_photo_url, shop.cover_photo.url
            json.liked shop.liked(@current_user.id) if @current_user
            json.type "shop"
        end
    end
end