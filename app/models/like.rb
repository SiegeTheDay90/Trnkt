# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  user_id       :bigint
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
    validates :user_id, :likeable_id, :likeable_type, presence: true

    belongs_to(
        :likeable,
        polymorphic: true
    )

    belongs_to :user
end
