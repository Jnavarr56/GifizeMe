class Gif < ApplicationRecord
    belongs_to :user
    belongs_to :app_emoji
    has_one_attached :gif_file
end
