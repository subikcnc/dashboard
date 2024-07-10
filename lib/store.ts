import { configureStore } from '@reduxjs/toolkit'
import stepCounterSlice from '@/lib/features/counter/stepCounterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      stepCounter: stepCounterSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']