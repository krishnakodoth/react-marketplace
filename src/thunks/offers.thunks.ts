import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchOffers = createAsyncThunk('offers/fetchOffers', async () => {
  // TODO: fetch Offers from API here (install axios manually if needed)
  const response = await fetch('http://localhost:3001/offers');
  const data = await response.json();
  return data;
});
