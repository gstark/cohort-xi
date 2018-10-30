class Game < ApplicationRecord
  belongs_to :designer, optional: true
  has_many :reviews
  has_many :comments

  validates :title, presence: true
  validates :description, presence: true
end
