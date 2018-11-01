class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description
      t.integer :min_players
      t.integer :max_players
      t.integer :publication_year

      t.timestamps
    end
  end
end
