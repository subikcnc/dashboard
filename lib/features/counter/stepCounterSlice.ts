"use client";
import { createSlice } from "@reduxjs/toolkit";

interface StepState {
  currentMajorStep: number;
  currentMinorStep: number;
}

const initialState: StepState = {
  currentMajorStep: 0,
  currentMinorStep: 0,
};

export const stepCounterSlice = createSlice({
  name: "stepCounter",
  initialState,
  reducers: {
    incrementMajorStep: (state) => {
      state.currentMajorStep += 1;
    },
    incrementMinorStep: (state) => {
      state.currentMinorStep += 1;
    },
    decrementMajorStep: (state) => {
      state.currentMajorStep -= 1;
    },
    decrementMinorStep: (state) => {
      state.currentMinorStep -= 1;
    },
    resetMajorStep: (state) => {
      state.currentMajorStep = 0;
    },
    resetMinorStep: (state) => {
      state.currentMinorStep = 0;
    },
  },
});

export const {
  incrementMajorStep,
  incrementMinorStep,
  decrementMajorStep,
  decrementMinorStep,
  resetMajorStep,
  resetMinorStep,
} = stepCounterSlice.actions;
export default stepCounterSlice.reducer;
