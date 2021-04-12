import { createSlice } from '@reduxjs/toolkit';
import reqDescriptionItem from '../request/description.requests';

/* eslint no-param-reassign: ["error", { "props": false }] */

const descriptionItemSlice = createSlice({
  name: 'descriptionItemSlice',
  initialState: {
    infoItem: {},
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
    infoItemSucces: (state, action) => {
      state.infoItem = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer } = descriptionItemSlice;

export const {
  startLoading, hasError, infoItemSucces,
} = actions;

export const fetchDescriptionItem = (id) => async (dispatch) => {
  dispatch(startLoading());
  const [error, data] = await reqDescriptionItem(id);
  if (error) {
    dispatch(hasError(error));
    return { status: 'error', resp: error };
  }

  dispatch(infoItemSucces(data.item));

  return { status: 'succes' };
};

export default reducer;
