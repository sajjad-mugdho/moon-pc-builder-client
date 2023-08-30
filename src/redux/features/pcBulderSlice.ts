const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  pc: {
    cpu: {},
    motherboard: {},
    ram: {},
    power: {},
    storage: {},
    monitor: {},
    others: {},
  },
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    addToPc: (
      state: { pc: { [x: string]: any } },
      action: { payload: { category: any; product: any } }
    ) => {
      const { category, product } = action.payload;
      state.pc[category] = product;
    },
    removeFromPc: (
      state: { pc: { [x: string]: {} } },
      action: { payload: { category: any } }
    ) => {
      const { category } = action.payload;
      console.log(category);
      state.pc[category] = {};
    },
  },
});

export const { addToPc, removeFromPc } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
