// Import modules:
import { createSlice } from "@reduxjs/toolkit";
import { FormDataType } from "../../types/services/FormSliceType";

const initialState: FormDataType = {
  data: [
    {
      id: null,
      firstname: null,
      lastname: null,
      dateofbirth: null,
      street: null,
      city: null,
      zipcode: null,
      state: null,
      startdate: null,
      department: null,
    },
  ],
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
