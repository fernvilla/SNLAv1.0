class CreatePreps < ActiveRecord::Migration
  def change
    create_table :preps do |t|
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
