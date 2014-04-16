class AddImageToTrojans < ActiveRecord::Migration
  def change
    add_column :trojans, :image, :string
  end
end
