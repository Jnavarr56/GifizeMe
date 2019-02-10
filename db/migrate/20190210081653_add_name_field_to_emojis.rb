class AddNameFieldToEmojis < ActiveRecord::Migration[5.2]
  def change
    add_column :emojis, :name, :string
  end
end
