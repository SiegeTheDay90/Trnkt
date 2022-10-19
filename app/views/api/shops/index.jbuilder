@shops.each do |shop|
    json.set! shop.id do
        json.extract! shop, :id, :name, :description, :state, :country, :rating, :sales, :seller_id
        json.set! :seller do
            json.extract! shop.seller, :id, :first_name, :last_name, :email 
        end
        json.set! :photo_url, shop.thumbnail.url
        json.set! :cover_photo_url, shop.cover_photo.url
        liked = !(shop.likes.where(user_id: @current_user.id, likeable_id: shop.id).empty?)
        json.liked liked
    end
end