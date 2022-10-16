class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.references :shop, null: false, foreign_key: true

      t.timestamps
    end
  end
end
