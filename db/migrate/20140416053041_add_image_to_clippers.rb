class AddImageToClippers < ActiveRecord::Migration
  def change
    add_column :clippers, :image, :string
  end
end
