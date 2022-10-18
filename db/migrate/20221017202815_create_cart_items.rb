class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.integer :quantity, null: false, default: 0
      t.timestamps
    end
  
    add_reference :cart_items, :buyer
    add_reference :cart_items, :product
    add_foreign_key :cart_items, :users, column: :buyer_id
    add_foreign_key :cart_items, :products, column: :product_id
    add_index :cart_items, [:buyer_id, :product_id], unique: true


  end
end
