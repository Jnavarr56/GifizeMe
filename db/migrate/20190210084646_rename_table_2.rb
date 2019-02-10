class RenameTable2 < ActiveRecord::Migration[5.2]
  def change
    rename_table :app_emojis, :appemojis
  end
end
