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
  # has_secure_password
  validates :username, :email, :password_digest, :password, :session_token, presence: true
  validates :username, :email, :password_digest, :session_token, uniqueness: true
  validates :password, length: {in: 8..12, message: "password must be between 8 and 12 characters"}
  validates :username, length: {in: 6..16}, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, email: {mode: :strict, require_fqdn: true, message: "must be a valid email"}

  before_validation :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(credential, password)
    if(EmailValidator.valid?(credential))
      user = User.find_by(email: credential)
    else
      user = User.find_by(username: credential)
    end

    if (user && user.is_password?(password))
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    passsword_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end



  private

  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64

    while User.exists?(session_token: token)
        token = SecureRandom::urlsafe_base64
    end

    token
  end
end













