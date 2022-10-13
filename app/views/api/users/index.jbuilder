@users.each do |user|
    json.set! user.id do
        json.extract! user, :first_name, :email
    end
end