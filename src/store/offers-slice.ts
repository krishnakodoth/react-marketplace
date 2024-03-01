import { createSlice } from '@reduxjs/toolkit';
import { fetchOffers } from '../thunks/offers.thunks';

const initialState = {
  offers: [],
  totalPrice: 0,
  loading: false,
  itemSelections: [],
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    loadOffers:(state) => {
      state.loading = true;
    },
    changeSelectedQty: (state, action) => {
      //@ts-ignore
      const { id, selected } = action.payload;
      // TODO: save chosen Offer selected state to the store
      //@ts-ignore
      if(state.itemSelections.some(row=>row.id === id)){
        //@ts-ignore
        state.itemSelections = state.itemSelections.filter(row=>row.id !== id)
      }
      else{
        //@ts-ignore
        state.itemSelections.push({id, selected})
      }
      let totalUpdatedPrice =  0;
      //@ts-ignore
      state.itemSelections.forEach(row=> totalUpdatedPrice+=parseFloat(row.selected))
      state.totalPrice = parseFloat(totalUpdatedPrice.toFixed(3));
    },
    loadOfferData: (state, action) => {
      console.log(action);
      const { offers } = action.payload;
      state.offers = offers;
      // TODO: save chosen Offer selected state to the store
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchOffers.pending, (state) => {
      //@ts-ignore
     state.loading = true;
   });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
       //@ts-ignore
      state.offers = action.payload;
      state.loading = false;
    });
  },

  // extraReducers: (builder) => {
  //   // TODO: handle asyncThunk state changes here: display/hide loader, add Offers to the store
  // },
});

export const { loadOffers,loadOfferData, changeSelectedQty } =
  offersSlice.actions;

export default offersSlice.reducer;
