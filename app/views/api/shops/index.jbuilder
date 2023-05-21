json.set! :shops do
    @shops.each do |shop|
        json.set! shop.id do
            json.extract! shop, :id, :name, :description, :state, :country, :rating, :sales, :seller_id
            json.set! :photo_url, shop.thumbnail.url
            json.set! :cover_photo_url, shop.cover_photo.url
            if @current_user
                puts "grabbing like status for shop#{shop.id}"
                liked = !(shop.likes.where(user_id: @current_user.id, likeable_id: shop.id).empty?)
                puts liked
            else
                liked = false
            end
            json.liked liked
            json.type "shop"
        end
    end
end