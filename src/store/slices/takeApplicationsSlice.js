import { createSlice } from '@reduxjs/toolkit';
import { Axios } from '../../utils/axios';

const initialState = {
  message: '',
};

export const takeApplicationsSlice = createSlice({
  name: 'newApplication',
  initialState,
  reducers: {
    checkForNewApplication(state, action) {
      state.message = action.payload;
    },
    // получение заявок в раздел обработки и корзина
  },
});

export const { checkForNewApplication } = takeApplicationsSlice.actions;

export default takeApplicationsSlice.reducer;

// Для получения заявок в разделе "К обработке"

export const takeNewApplication =
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
        'https://hp-xmlgate-test.humo.tj/orzu/underwriter/takeApplication',
        requestOptions
      );
      //   console.log(response.data.message);
      const data = await response.data;
      const appData = data.payload;
      dispatch(checkForNewApplication(appData));
      // console.log(appData);
    } catch (e) {
      console.error(e);
    }
  };
