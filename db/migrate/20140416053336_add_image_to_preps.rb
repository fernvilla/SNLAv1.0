class AddImageToPreps < ActiveRecord::Migration
  def change
    add_column :preps, :image, :string
  end
end
