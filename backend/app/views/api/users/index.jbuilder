json.array! @users do |user|
    json.extract! user, :first_name, :email
end