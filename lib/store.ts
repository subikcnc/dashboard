import { configureStore } from "@reduxjs/toolkit";
// 1. Importing necessary modules
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to local storage for web
import stepCounterReducer from "@/lib/features/counter/stepCounterSlice";

// 2. Combine your reducers into a rootReducer
// You combine your reducers into a 'rootReducer' because 'redux-persist' works with a single root reducer
const rootReducer = combineReducers({
  stepCounter: stepCounterReducer,
});

// 3) Configuration for Redux Persist
// We define a 'persistConfig' object that specifies the configuration for persisting the state.
// The 'key' is a unique identifier for the persisted data and 'storage' specifies the storage engine
const persistConfig = {
  key: "root",
  storage,
};

// 4) Create persisted reducer
// We create a `persistedReducer` by passing the 'persistConfig' and the 'rootReducer' to the 'persistReducer' function.
// This creates a version of our root reducer that automatically handles persistence
const persistedReducer = persistReducer(persistConfig, rootReducer);

// You configure the store with the persistedReducer and customize the middleware to ignore certain Redux Persist actions. This prevents issues with Redux's default serialization checks.
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
