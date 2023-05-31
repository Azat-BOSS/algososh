import { createSlice } from "@reduxjs/toolkit";

type TState = {
  inputField: string[] | any,
  btnState: boolean
}

const initialState: TState = {
  inputField: [],
  btnState: false,
}

export const inputSlice = createSlice({
  name: "inputSlice",
  initialState: initialState,
  reducers: {
    getString: (state, action) => {
      state.inputField = action.payload.split("")
    },
    changeBtnState: (state, action) => {
      state.btnState = action.payload
    }
  }
})

export const {getString, changeBtnState} = inputSlice.actions
