import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  score: string;
}

const initialState: User[] = [];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});
