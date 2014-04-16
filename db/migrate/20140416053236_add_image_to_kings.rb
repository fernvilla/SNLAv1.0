class AddImageToKings < ActiveRecord::Migration
  def change
    add_column :kings, :image, :string
  end
end
