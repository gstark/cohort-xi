class Game < ApplicationRecord
  validates :title, presence: true
  validates :min_players, presence: true, numericality: {only_integer: true, greater_than: 0}
  validates :max_players, presence: true, numericality: {only_integer: true, greater_than: 0}
  validates :publication_year, presence: true, numericality: {only_integer: true}
end
