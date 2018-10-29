class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :min_players
      t.integer :max_players
      t.integer :min_age
      t.integer :year_published

      t.timestamps
    end
  end
end
