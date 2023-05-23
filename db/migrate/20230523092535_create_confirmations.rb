class CreateConfirmations < ActiveRecord::Migration[7.0]
  def change
    create_table :confirmations do |t|
      t.string :code, null: false
      t.references :user, null: false, index: {unique: true}
      t.boolean :confirmed, default: false
      t.timestamps
    end
  end
end
