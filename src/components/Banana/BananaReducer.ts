import { createSlice, configureStore } from "@reduxjs/toolkit";

// I create a slice of the store
const bananaCounterSlice = createSlice({
  name: "bananaCounterSlice",
  initialState: { value: 0 },
  reducers: {
    incremented: (bananas) => {
      bananas.value += 1;
    },
    decremented: (bananas) => {
      bananas.value -= 1;
    },
    restarted: (bananas) => {
      bananas.value = 0;
    },
  },
});

// I configure the store. Many slices can be passed as an object in "reducer", like : reducer: {bananaCounter.reducer, orangeCounter.reducer, ...}
const bananaStore = configureStore({ reducer: bananaCounterSlice.reducer });
const { incremented, decremented, restarted } = bananaCounterSlice.actions;

// Exporting everything necessary to a specific and unique component.
export { bananaStore, incremented, decremented, restarted };
