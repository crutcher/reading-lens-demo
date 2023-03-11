import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { termKey, TranslatedTerm } from "../term";

interface VocabState {
  value: { [key: string]: boolean };
}

const initialState: VocabState = {
  value: {},
};

export const vocabSlice = createSlice({
  name: "vocab",
  initialState,
  reducers: {
    toggleTerm: (state, action: PayloadAction<TranslatedTerm>) => {
      let key = termKey(action.payload);
      if (key in state.value) {
        delete state.value[key];
      } else {
        state.value[key] = true;
      }
    },
  },
});

export const { toggleTerm } = vocabSlice.actions;

export default vocabSlice.reducer;
