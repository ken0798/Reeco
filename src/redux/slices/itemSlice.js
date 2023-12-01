import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, status: "" },
    { id: 2, status: "" },
    { id: 3, status: "" },
    { id: 4, status: "" },
    { id: 5, status: "" },
    { id: 6, status: "" },
    { id: 7, status: "" },
    { id: 8, status: "" },
  ],
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      const { newStatus, itemId } = action.payload;
      state.items = state.items.map((item) =>
        item.id === itemId ? { ...item, status: newStatus } : item
      );
    },
  },
});

export const { updateStatus } = itemSlice.actions;
export default itemSlice.reducer;
