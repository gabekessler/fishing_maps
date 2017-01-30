class Location < ApplicationRecord

  validates :longitude, :latitude, :name, presence: true
end
