# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  CartItem.destroy_all
  Product.destroy_all
  Shop.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('shops')
  ApplicationRecord.connection.reset_pk_sequence!('products')


  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    first_name: 'Demo',
    last_name: 'User',
    email: 'demo@user.io', 
    password: 'password'
  )

  # More users
  100.times do 
    User.create!({
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  # User.all.each do |user|
  #   pic = Down.download("https://picsum.photos/100/100")
  #   user.thumbnail.attach(io: pic, filename: "user#{user.id}_thumbnail.jpg")
  # end


  puts "Creating shops..."

  Shop.create!({
    name: Faker::Company.unique.name,
    description: [nil, Faker::Lorem.sentence(word_count: 4)].sample,
    seller_id: 1,
    country: Faker::Fantasy::Tolkien.location,
    state: Faker::Nation.capital_city,
    rating: [3,3.5,4,4.5,5].sample,
    sales: (50..10000).to_a.sample
  }) 

  24.times do 
    Shop.create!({
      name: Faker::Company.unique.name,
      description: [nil, Faker::Lorem.sentence(word_count: 4)].sample,
      seller_id: (2..25).to_a.sample,
      country: Faker::Fantasy::Tolkien.location,
      state: Faker::Nation.capital_city,
      rating: [3,3.5,4,4.5,5].sample,
      sales: (50..10000).to_a.sample
    }) 
  end

  # Shop.all.each do |shop|
  #   pic = Down.download("https://picsum.photos/100/100")
  #   shop.thumbnail.attach(io: pic, filename: "shop#{shop.id}_thumbnail.jpg")
  #   cover = Down.download("https://picsum.photos/1900/475")
  #   shop.cover_photo.attach(io: cover, filename: "shop#{shop.id}_cover.jpg")
  # end

  puts "Creating products..."

  500.times do 
    Product.create!({
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence(word_count: 12),
      price: Faker::Commerce.price,
      shop_id: (1..25).to_a.sample
    }) 
  end

  # Product.all.each do |product|
  #   pic = Down.download("https://picsum.photos/256")
  #   product.thumbnail.attach(io: pic, filename: "product#{product.id}_thumbnail.jpg")
  # end

  puts "Created #{User.count} users"
  puts "Created #{Shop.count} shops"
  puts "Created #{Product.count} products"
end