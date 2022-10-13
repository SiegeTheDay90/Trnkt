json.user do
    json.extract! @user, :id, :first_name, :email, :created_at, :updated_at
end