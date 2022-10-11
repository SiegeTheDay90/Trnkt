json.set! @user.id do
    json.extract! @user, :id, :email, :first_name, :created_at, :updated_at
end