class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.references :game, foreign_key: true
      t.string :author
      t.text :message

      t.timestamps
    end
  end
end
