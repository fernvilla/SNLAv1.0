class CreateTrojans < ActiveRecord::Migration
  def change
    create_table :trojans do |t|
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
