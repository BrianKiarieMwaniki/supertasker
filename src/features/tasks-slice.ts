import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TasksState = {
  entities: Task[];
};

const initialState: TasksState = {
  entities: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.unshift(action.payload);
    },
    removeTask: (state, action: PayloadAction<Task>) => {
        const indexOfTaskToRemove = state.entities.indexOf(action.payload);
        state.entities.splice(indexOfTaskToRemove, 1);
    },
  },
});

