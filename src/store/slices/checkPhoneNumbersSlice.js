import { createSlice } from '@reduxjs/toolkit';
import { BaseUrl } from '../../baseUrl';
import { apiUrl } from '../../utils/apiRoutes';
import { Axios } from '../../utils/axios';

const initialState = [];
export const phoneNumbersCheck = createSlice({
  name: 'phone_overlaps',
  initialState,
  reducers: {
    setPhoneOverlaps(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { setPhoneOverlaps } = phoneNumbersCheck.actions;
export const checkedNumbers = (state) => state.phone_overlaps;
export default phoneNumbersCheck.reducer;

export const getCheckedNumbers = (id) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*',
      accept: 'application/json',
    },
  };
  try {
    const response = await Axios(
      `${BaseUrl + apiUrl.phoneOverlaps + `?id=${id}`}`,
      requestOptions
    );
    const data = await response.data;
    const appData = data.payload;
    console.log('phone overlaps', appData);
    dispatch(setPhoneOverlaps(appData));
  } catch (e) {
    console.error(e);
  }
};
