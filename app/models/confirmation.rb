# == Schema Information
#
# Table name: confirmations
#
#  id         :bigint           not null, primary key
#  code       :string           not null
#  user_id    :bigint           not null
#  confirmed  :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Confirmation < ApplicationRecord
    validates :user_id, :code, presence: true

    before_validation :ensure_confirmed, :ensure_code, :ensure_unique


    def ensure_confirmed
        self.confirmed ||= false
    end

    def ensure_code
        self.code ||= SecureRandom.hex(3)
    end

    def ensure_unique
        a = Confirmation.find_by(user_id: self.user_id)
        if a
            a.destroy
        end
    end

    belongs_to :user

end
