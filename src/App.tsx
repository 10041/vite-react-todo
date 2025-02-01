import type { RootState } from '@/redux/store.ts'
import TaskItem from '@/components/TaskItem.tsx'
import { useAppDispatch, useAppSelector } from '@/redux/hooks.ts'
import { createTask, deleteAll, deleteAllCompleted } from '@/redux/todoSlice.ts'
import { useState } from 'react'
import './theme/App.css'

function App() {
  const dispatch = useAppDispatch()
  const { tasks } = useAppSelector((state: RootState) => state.todoList)

  const [newTaskText, setNewTaskText] = useState('')

  const tasksList = tasks.map(task => <TaskItem key={task.id} task={task} />)

  function addNewTask() {
    if (!newTaskText)
      return

    dispatch(createTask(newTaskText))
    setNewTaskText('')
  }

  return (
    <>
      <h1>Todo List</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="What do you want to do?"
          value={newTaskText}
          onChange={e => setNewTaskText(e.target.value)}
        />
        <button type="button" onClick={addNewTask} disabled={!newTaskText}>Add</button>
      </div>
      <div className="todo-list">
        {tasks.length
          ? tasksList
          : <p className="no-tasks-message">No tasks left. Well done!</p>}
      </div>
      <div className="todo-actions">
        <button type="button" onClick={() => dispatch(deleteAllCompleted())}>Clear completed</button>
        <button type="button" onClick={() => dispatch(deleteAll())}>Clear all</button>
      </div>
    </>
  )
}

export default App
