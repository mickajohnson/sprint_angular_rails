class TasksController < ApplicationController
  def index
    render json: Task.all
  end

  def create
    task = Task.new( task_params )
    task.status = "to_do"
    unless task.valid?
      render json: task.errors.full_messages
    else
      task.save
      render json: task
    end
  end

  def update
    task = Task.find(params[:id])
    if task.status == "to_do"
      task.status = "doing"
    elsif task.status == "doing"
      task.status = "done"
    else
      task.status = "hidden"
    end
    task.save
    render json: task
  end

  private
  def task_params
    params.require(:task).permit(:description, :priority, :due_date)
  end
end
