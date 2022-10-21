# README

[Trnkt Live](https://trnkt-2022.herokuapp.com/)

## Description
Trnkt is an e-commerce app inspired by Etsy. On Trnkt, users can find and view `shops` and `products` based on recommended collections or by using the search bar.

## Technology
### React Redux
The Trnkt stack uses `React Redux` to render and manage the state of the app's frontend.

### Ruby on Rails
Trnkt serves information from the database to the frontend using `Ruby on Rails`.

### Postgresql
`Postgresql` is used to store the app's data. Active Storage is used to store images with Amazon Web Services and associate them with shops, products and users.

## Features
### User Authentication
Users can sign up for an account that is secured with password encryption.

<img src="https://raw.githubusercontent.com/SiegeTheDay90/Trnkt/main/app/assets/images/LoginModal.png" alt="User Authentication" width="750"/>

### Navigation Menu
The `Top Selling` and `Best Rated` categories are populated dynamically by sorting all shops in the database by sales or rating. Remaining categories contain products found by keywords such as `"Durable"` The menu choices will update with changes to the database.

<img src="https://github.com/SiegeTheDay90/Trnkt/blob/a5744dea5a80e57ff11eb2d59236963ed53788b8/app/assets/images/NavigationMenu.png" alt="Navigation Menu" width="750"/>

### Shop & Product Display Pages
Each `shop`'s page can be customized with a coverphoto, thumbnail, and a profile picture of the store's owner. Users can click a button to follow or unfollow a shop.

The `product`'s image is enlarged. A user who finds a product can also navigate to the shop that sells that product from this page. There is a menu that can take options such as quantity and add the product to the session user's cart.

|Shop| |Product|
|-|-|-|
|<img src="https://github.com/SiegeTheDay90/Trnkt/blob/main/app/assets/images/ShopShow.png?raw=true" width="380">| |<img src="https://raw.githubusercontent.com/SiegeTheDay90/Trnkt/347f2ee9e885856a78ed0b15bdc4776ee5cdcbeb/app/assets/images/ProductShow.png" width ="395">|


## Code Snippets
### Controllers
Backend controllers such as the `products_controller` use url parameters to efficiently query only necessary data for rendering.
```ruby
class Api::ProductsController < ApplicationController
  def index
    if params[:num]
      num = params[:num].to_i
    else
      num = nil
    end
    if params[:title]
      @products = Product.where("name ILIKE '%#{params[:title]}%'").limit(num)
    elsif num
      @products = Product.all.sample(num)
    else
      @products = Product.all
    end
    render :index
  end

  def show
    @product = Product.find(params[:id])
    if @product
      @shop = @product.shop
      render :show
    else
      render json: nil
    end
  end
end
```

### JSON Responses with JBuilder
A request to backend route `shops/:id` serves a JSON object with top-level keys that represent the `shop`, the `seller`, as well as all `products` sold by that shop.
```ruby 
json.set! :shop do 
    json.extract! @shop, :id, :name, :description, :seller_id, :sales, :rating, :state, :country, :created_at, :updated_at
    json.set! :cover_photo_url, @shop.cover_photo.url
    json.set! :photo_url, @shop.thumbnail.url
    json.liked @liked
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
```
