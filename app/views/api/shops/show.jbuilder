json.extract! @shop, :id, :name, :description, :seller_id, :sales, :rating, :created_at, :updated_at
json.set! :seller, @shop.seller
json.set! :coverphotourl, @cover_photo_url
