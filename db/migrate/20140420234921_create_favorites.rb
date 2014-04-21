class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.string :title
      t.string :author
      t.text :summary
      t.datetime :published
      t.string :url
      t.string :source
      t.string :image

      t.timestamps
    end
  end
end
