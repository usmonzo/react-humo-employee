import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const btnLoader = createSlice({
  name: 'btnLoader',
  initialState,
  reducers: {
    setBtnLoading(state, action) {
      state = action.payload;
    },
  },
});

export const { setBtnLoading } = btnLoader.actions;
export const btnLoading = (state) => state.btnLoader;
export default btnLoader.reducer;
