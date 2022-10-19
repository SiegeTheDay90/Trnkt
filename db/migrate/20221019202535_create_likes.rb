class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :user
      t.references :likeable, polymorphic: true
      t.timestamps
    end

    add_foreign_key :likes, :users, column: :user_id

  end
end
