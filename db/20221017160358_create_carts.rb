class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
    end

    add_column :carts, :products, :bigint, array: true, default: '{}'
    add_reference :carts, :user, index: true
    add_foreign_key :carts, :users, column: :user_id
  end
end
