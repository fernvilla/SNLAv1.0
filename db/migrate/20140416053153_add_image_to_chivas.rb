class AddImageToChivas < ActiveRecord::Migration
  def change
    add_column :chivas, :image, :string
  end
end
