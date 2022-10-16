# == Schema Information
#
# Table name: shops
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  state       :string           not null
#  country     :string           not null
#  rating      :integer
#  sales       :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seller_id   :bigint
#
class Shop < ApplicationRecord
    validates :name, presence: {message: "can't be blank."}, uniqueness: {message: "is already taken."}
    validates :seller_id, presence: {message: "missing or invalid."}

    belongs_to(
        :seller,
        class_name: 'User',
        foreign_key: :seller_id,
        primary_key: :id
    )

    has_many(
        :products,
        class_name: 'Product',
        foreign_key: :shop_id,
        primary_key: :id,
        dependent: :destroy
    )

    has_one_attached :thumbnail

    has_one_attached :cover_photo
end
