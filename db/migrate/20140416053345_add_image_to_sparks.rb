class AddImageToSparks < ActiveRecord::Migration
  def change
    add_column :sparks, :image, :string
  end
end
