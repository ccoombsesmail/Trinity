class Addmessagetocontacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :message, :string, null: false
  end
end
