class AddImageToDodgers < ActiveRecord::Migration
  def change
    add_column :dodgers, :image, :string
  end
end
