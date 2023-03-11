import { configureStore } from "@reduxjs/toolkit";
import vocabSlice from "./features/vocabSlice";
import termSpanSelectionSlice from "./features/termSpanSelectionSlice";

export const store = configureStore({
  reducer: {
    vocab: vocabSlice,
    termSpanSelection: termSpanSelectionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
