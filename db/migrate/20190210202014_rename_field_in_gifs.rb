class RenameFieldInGifs < ActiveRecord::Migration[5.2]
  def change
    rename_column :gifs, :emoji_id, :app_emoji_id
  end
end
