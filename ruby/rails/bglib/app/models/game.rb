class Game < ApplicationRecord
  belongs_to :designer, optional: true
  validates :title, presence: true
  validates :description, presence: true
end
