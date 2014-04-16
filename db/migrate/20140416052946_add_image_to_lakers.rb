class AddImageToLakers < ActiveRecord::Migration
  def change
    add_column :lakers, :image, :string
  end
end
