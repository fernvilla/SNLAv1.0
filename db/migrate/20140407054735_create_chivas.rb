class CreateChivas < ActiveRecord::Migration
  def change
    create_table :chivas do |t|
      t.string :title
      t.string :author
      t.text :summary
      t.datetime :published
      t.string :url
      t.string :source

      t.timestamps
    end
  end
end
