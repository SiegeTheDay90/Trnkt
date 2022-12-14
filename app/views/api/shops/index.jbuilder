@shops.each do |shop|
    json.set! shop.id do
        json.extract! shop, :id, :name, :description, :state, :country, :rating, :sales, :seller_id
        json.set! :seller do
            json.extract! shop.seller, :id, :first_name, :last_name, :email 
        end
        json.set! :photo_url, shop.thumbnail.url
        json.set! :cover_photo_url, shop.cover_photo.url
        if @current_user
            liked = !(shop.likes.where(user_id: @current_user.id, likeable_id: shop.id).empty?)
        else
            liked = false
        end
        json.liked liked
        json.type "shop"
    end
end