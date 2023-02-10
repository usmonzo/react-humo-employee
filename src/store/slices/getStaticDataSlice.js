import { createSlice } from '@reduxjs/toolkit';
import { BaseUrl } from '../../baseUrl';
import { apiUrl } from '../../utils/apiRoutes';
import { Axios } from '../../utils/axios';

const initialState = [];

export const staticData = createSlice({
  name: 'static_data',
  initialState,
  reducers: {
    setStaticData(state, action) {
      state[0] = action.payload;
    },
  },
});

export const { setStaticData } = staticData.actions;
export const fillStaticData = (state) => state.static_data;
export default staticData.reducer;

export const getStaticData = () => async (dispatch) => {
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
      `${BaseUrl + apiUrl.staticData}`,
      requestOptions
    );
    const data = await response.data;
    const appData = data.payload;
    // console.log('Static data', appData);
    dispatch(setStaticData(appData));
  } catch (e) {
    console.error(e);
  }
};
