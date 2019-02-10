class RenameTable3 < ActiveRecord::Migration[5.2]
  def change
    rename_table :appemojis, :app_emojis
  end
end
