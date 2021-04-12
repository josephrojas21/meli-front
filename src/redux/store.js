import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './actions/search.reducer';
import DescriptionReducer from './actions/description.reducer';

const store = configureStore({
  reducer: {
    searchItems: SearchReducer,
    descriptionItem: DescriptionReducer,
  },
});

export default store;
