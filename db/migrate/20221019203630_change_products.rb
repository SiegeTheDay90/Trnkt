class ChangeProducts < ActiveRecord::Migration[7.0]
  def change
    change_table :products do |t|
      t.references :likeable, polymorphic: true
    end
    change_table :shops do |t|
      t.references :likeable, polymorphic: true
    end
  end
end
