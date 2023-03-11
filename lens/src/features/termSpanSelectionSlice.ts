import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TermSpanSelectionState {
  value: number;
}

const initialState: TermSpanSelectionState = {
  value: -1,
};

export const termSpanSelectionSlice = createSlice({
  name: "termSpanSelection",
  initialState,
  reducers: {
    selectTermSpan: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { selectTermSpan } = termSpanSelectionSlice.actions;

export default termSpanSelectionSlice.reducer;
