import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
  status: 'idle',
  error: null,

  
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        ...action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state.tasks[index].completed = !state.tasks[index].completed;
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, toggleComplete } = taskSlice.actions;
export default taskSlice.reducer;