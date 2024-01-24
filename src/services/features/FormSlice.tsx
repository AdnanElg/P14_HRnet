// Import modules:
import { createSlice } from "@reduxjs/toolkit";
import { FormDataType } from "./FormSlice.type";

const initialState: FormDataType = {
  data: [],
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    setCreateEmployee: (state, action) => {
      const newEmployee = action.payload;
      state.data.push(newEmployee);
    },
  },
});

// Export reducers :
export const { setCreateEmployee } = formSlice.actions;
export default formSlice.reducer;
