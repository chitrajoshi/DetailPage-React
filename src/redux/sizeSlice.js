import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sizes: [
        {size: 'xs', id: '0'},
        {size: 's', id: '1'},
        {size: 'm', id: '2'},
        {size: 'l', id: '3'},
        {size: 'xl', id: '4'}],
    selectedSize: 'xs'
  };
  
  const sizeSlice = createSlice({
    name: "size",
    initialState,
    reducers: {
      selectSize: (state, action) => {
        state.selectedSize = action.payload.size;
      }
    },
  });
  
  export const { selectSize } = sizeSlice.actions;
  
  export default sizeSlice.reducer;