class AddImageToBruins < ActiveRecord::Migration
  def change
    add_column :bruins, :image, :string
  end
end
