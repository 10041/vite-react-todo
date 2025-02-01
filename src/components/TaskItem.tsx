import { useAppDispatch } from '@/redux/hooks.ts'
import { deleteTask, toggleTask, updateTaskText } from '@/redux/todoSlice.ts'
import { useState } from 'react'

function TaskItem({ task }: { task: Task }) {
  const dispatch = useAppDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [updatedTaskText, setUpdatedTaskText] = useState(task.text)

  function updateTask() {
    if (task.text !== updatedTaskText) {
      dispatch(updateTaskText({ id: task.id, text: updatedTaskText }))
    }

    setIsEditing(!isEditing)
  }

  return (
    <>
      {isEditing
        ? (
            <div className="task-item">
              <input
                type="text"
                value={updatedTaskText}
                onChange={e => setUpdatedTaskText(e.target.value)}
              />
              <button type="button" onClick={updateTask}>Save</button>
            </div>
          )
        : (
            <div className={`task-item ${task.isComplete ? 'checked' : ''}`}>
              <input
                type="checkbox"
                name="myCheckbox"
                checked={task.isComplete}
                onChange={() => dispatch(toggleTask(task.id))}
              />
              <span>{task.text}</span>
              <button type="button" onClick={() => setIsEditing(!isEditing)}>Edit</button>
              <button
                type="button"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </button>
            </div>
          )}
    </>
  )
}

export default TaskItem
