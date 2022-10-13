# == Schema Information
#
# Table name: shops
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seller_id   :bigint
#
class Shop < ApplicationRecord
    validates :name, presence: {message: "can't be blank."}, uniqueness: {message: "is already taken."}
    validates :seller_id, presence: {message: "missing or invalid."}  
end
