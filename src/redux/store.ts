import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { inputSlice } from "./reducers/input/inputReducer";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

const rootReducers = combineReducers({
  inputSlice: inputSlice.reducer
})

export const store = configureStore({
  reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch;