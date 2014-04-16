class AddImageToGalaxies < ActiveRecord::Migration
  def change
    add_column :galaxies, :image, :string
  end
end
