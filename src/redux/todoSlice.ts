import type { PayloadAction } from '@reduxjs/toolkit'
import { defaultTasks } from '@/constants/toboList.ts'
import { createSlice } from '@reduxjs/toolkit'

export interface TodoState {
  tasks: Task[]
}

const initialState: TodoState = {
  tasks: [
    ...defaultTasks,
  ],
}

export const counterSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      const newId = state.tasks.length + 1000

      state.tasks.push({
        id: newId,
        isComplete: false,
        text: action.payload,
      })
    },
    getTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload)

      if (task) {
        task.isComplete = !task.isComplete
      }
    },
    updateTaskText: (state, action: PayloadAction<{ id: number, text: string }>) => {
      const { id, text } = action.payload
      const task = state.tasks.find(task => task.id === id)

      if (task) {
        task.text = text
      }
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload)

      if (task) {
        task.isComplete = !task.isComplete
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    deleteAllCompleted: (state) => {
      state.tasks = state.tasks.filter(task => !task.isComplete)
    },
    deleteAll: (state) => {
      state.tasks = []
    },
  },
})

export const {
  createTask,
  updateTaskText,
  toggleTask,
  deleteTask,
  deleteAllCompleted,
  deleteAll,
} = counterSlice.actions

export default counterSlice.reducer
