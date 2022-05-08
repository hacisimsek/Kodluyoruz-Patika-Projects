import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    value: 100000000000,
    items: [],
    diffMoney: 0,
  },
  reducers: {
    buyProperty: (state, action) => {
      state.diffMoney =
        -parseInt(action.payload.amount) * parseInt(action.payload.price);
      state.value += state.diffMoney;

      let addedItem = state.items.find(
        (item) => item.title === action.payload.title
      );
      if (addedItem) {
        addedItem.amount += action.payload.amount;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    sellProperty: (state, action) => {
      state.diffMoney =
        parseInt(action.payload.amount) * parseInt(action.payload.price);
      state.value += state.diffMoney;

      let addedItem = state.items.find(
        (item) => item.title === action.payload.title
      );
      if (addedItem) {
        if (addedItem.amount - action.payload.amount === 0) {
          state.items = state.items.filter(
            (item) => item.title !== addedItem.title
          );
        } else {
          addedItem.amount -= action.payload.amount;
        }
      }
    },
  },
});

export const selectItems = (state) => state.money.items;
export const selectValue = (state) => state.money.value;

export default moneySlice.reducer;

export const { buyProperty, sellProperty } = moneySlice.actions;

// items a önceden data eklenebilirdi
