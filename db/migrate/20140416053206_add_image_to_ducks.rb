class AddImageToDucks < ActiveRecord::Migration
  def change
    add_column :ducks, :image, :string
  end
end
