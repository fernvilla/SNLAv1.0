class CreateLakers < ActiveRecord::Migration
  def change
    create_table :lakers do |t|
      t.string :title
      t.string :author
      t.text :summary
      t.timedate :published
      t.string :url
      t.string :source

      t.timestamps
    end
  end
end
