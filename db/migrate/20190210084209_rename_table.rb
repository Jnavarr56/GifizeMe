class RenameTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :emojis, :app_emojis
  end
end
