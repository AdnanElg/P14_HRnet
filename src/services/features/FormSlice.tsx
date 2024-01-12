// Import modules:
import { createSlice } from "@reduxjs/toolkit";
import { FormDataType } from "../../types/services/FormSliceType";

const initialState: FormDataType = {
  data: [],
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    setCreateEmployee: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

// Export reducers :
export const { setCreateEmployee } = formSlice.actions;
export default formSlice.reducer;
