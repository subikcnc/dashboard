'use client'
import { createSlice } from "@reduxjs/toolkit";

export const stepCounterSlice = createSlice({
  name: "stepCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  },
});

export const { increment, decrement, reset } = stepCounterSlice.actions;
export default stepCounterSlice.reducer;