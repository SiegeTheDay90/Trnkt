# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  buyer_id   :bigint
#  product_id :bigint
#
class CartItem < ApplicationRecord
    validates :quantity, :buyer_id, :product_id, presence: true, numericality: true

    belongs_to(
        :buyer,
        class_name: 'User',
        foreign_key: :buyer_id
    )

    belongs_to(
        :product,
        class_name: 'Product',
        foreign_key: :product_id
    )
end
