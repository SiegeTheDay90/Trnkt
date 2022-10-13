class CreateShops < ActiveRecord::Migration[7.0]
  def change
    create_table :shops do |t|
      t.string :name, null: false
      t.text :description
      t.string :state, null: false
      t.string :country, null: false
      t.integer :rating
      t.integer :sales, default: 0

      t.timestamps
    end
    add_index :shops, :name, unique: true
    add_reference :shops, :seller, index: true
    add_foreign_key :shops, :users, column: :seller_id
  end
end
