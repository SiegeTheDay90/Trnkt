# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  validation :username, :email, :password_digest, :password, :session_token, presence: true
  validation :username, :email, :password_digest, :session_token, uniqueness: true
  validation :password, length: {in: 8..12}
  validation :username, length: {in: 6..16}
  valdiation :email, email: {mode: :strict, require_fqdn: true}

  def self.find_by_credentials(credential, password)
    if(EmailValidator.valdi?(credential){
      
    })

end
