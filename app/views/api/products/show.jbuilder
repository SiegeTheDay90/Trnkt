json.extract! @product, :id, :name, :description, :price, :shop_id
json.set! :shop, @product.shop