import { createSlice } from '@reduxjs/toolkit';
import reqSearchItems from '../request/search.requests';

/* eslint no-param-reassign: ["error", { "props": false }] */

const searchItemsSlice = createSlice({
  name: 'searchItemsSlice',
  initialState: {
    itemsList: [],
    categories: [],
    breadcum: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    searchItemsSucces: (state, action) => {
      state.itemsList = action.payload;
      state.isLoading = false;
    },
    categoriesSucces: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    breadcumSucces: (state, action) => {
      state.breadcum = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = searchItemsSlice;

export const {
  startLoading, hasError, searchItemsSucces, categoriesSucces, breadcumSucces,
} = actions;

export const fetchSearchItems = (query) => async (dispatch) => {
  dispatch(startLoading());
  const [error, data] = await reqSearchItems(query);
  if (error) {
    dispatch(hasError(error));
    return { status: 'error', resp: error };
  }

  dispatch(searchItemsSucces(data.items));
  dispatch(categoriesSucces(data.categories));
  dispatch(breadcumSucces(data.breadcrumb));

  return { status: 'succes' };
};

export default reducer;
