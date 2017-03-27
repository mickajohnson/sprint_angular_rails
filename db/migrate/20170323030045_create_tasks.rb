class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :status
      t.date :due_date
      t.string :priority

      t.timestamps null: false
    end
  end
end
