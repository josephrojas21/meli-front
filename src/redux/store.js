import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './actions/search.reducer';

const store = configureStore({
  reducer: {
    searchItems: SearchReducer,
  },
});

export default store;
