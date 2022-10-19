# == Schema Information
#
# Table name: products
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  description   :text             not null
#  price         :float            not null
#  shop_id       :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  likeable_type :string
#  likeable_id   :bigint
#
class Product < ApplicationRecord
  validates :name, :description, :price, :shop_id, presence: true
  validates :name, length: {in: (4..32)}
  validates :price, numericality: { greater_than: 0 }
  attr_accessor :quantity

  belongs_to(
    :shop,
    class_name: 'Shop',
    foreign_key: :shop_id,
    primary_key: :id
  )  
  
  has_many(
    :likes,
    as: :likeable
  )
  
  has_one_attached :thumbnail

end
