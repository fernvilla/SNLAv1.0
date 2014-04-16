class AddImageToAngels < ActiveRecord::Migration
  def change
    add_column :angels, :image, :string
  end
end
