import { createSlice } from '@reduxjs/toolkit';
import { Axios } from '../../utils/axios';

const initialState = {
  awaiting: {
    id: null,
    branch_name: '',
    type_of_application: null,
    date_of_application: '',
    client_name: '',
    client_suname: '',
    client_patronymic: '',
    credit_expert: '',
    sum: null,
    currency: '',
    status: '',
    reason_of_basket: '',
  },
  basket: {
    id: null,
    branch_name: '',
    type_of_application: null,
    date_of_application: '',
    client_name: '',
    client_suname: '',
    client_patronymic: '',
    credit_expert: '',
    sum: null,
    currency: '',
    status: '',
    reason_of_basket: '',
  },
};

export const myApplicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    setMyApplication(state, action) {
      state.awaiting = action.payload.awaiting;
      state.basket = action.payload.basket;
    },
    // получение заявок в раздел обработки и корзина
  },
});

export const { setMyApplication } = myApplicationsSlice.actions;

export default myApplicationsSlice.reducer;

// Для получения заявок в разделе "К обработке"

export const getMyApplications =
  (
    id,
    branch_name,
    type_of_application,
    date_of_application,
    client_name,
    client_suname,
    client_patronymic,
    credit_expert,
    sum,
    currency,
    status,
    reason_of_basket
  ) =>
  async (dispatch) => {
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
        'https://hp-xmlgate-test.humo.tj/orzu/underwriter/getMyApplications',
        requestOptions
      );
      const data = await response.data;
      const appData = data.payload;
      dispatch(setMyApplication(appData));
      // console.log(appData);
    } catch (e) {
      console.error(e);
    }
  };

export const test = () => async (dispatch) => {
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
      'https://hp-xmlgate-test.humo.tj/orzu/underwriter/ping',
      requestOptions
    );
    const data = await response.data;
    const appData = data.payload;
    dispatch(setMyApplication(appData));
    // console.log(appData);
  } catch (e) {
    console.error(e);
  }
};
