class CreateGifs < ActiveRecord::Migration[5.2]
  def change
    create_table :gifs do |t|
      t.integer :user_id
      t.integer :emoji_id

      t.timestamps
    end
  end
end
