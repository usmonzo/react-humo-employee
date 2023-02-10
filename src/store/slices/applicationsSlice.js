import { createSlice } from '@reduxjs/toolkit';
import { Axios } from '../../utils/axios';

const initialState = {
  application: {
    id: null,
    branch: '',
    type_of_application: '',
    underwriter_id: '',
    client_name: '',
    client_suname: '',
    client_patronymic: '',
    summ: null,
    date: '',
    currency: '',
  },
};

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    setApplication(state, action) {
      state.application = action.payload;
    },
    // получение заявок в раздел обработки и корзина
    setMyApplication(state, action) {},
  },
});

export const { setApplication } = applicationsSlice.actions;
export const currentApplication = (state) => state.applications.application;
export default applicationsSlice.reducer;

// Для получения заявок в разделе "К обработке"
export const getApplications =
  (
    id,
    branch,
    type_of_application,
    underwriter_id,
    client_name,
    client_suname,
    client_patronymic,
    summ,
    date,
    currency
  ) =>
  async (dispatch) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };

    try {
      const response = await Axios(
        'https://hp-xmlgate-test.humo.tj/orzu/underwriter/getAllApplications',
        requestOptions
      );
      const data = await response.data;
      const appData = data.payload.applications;
      dispatch(setApplication(appData));
    } catch (e) {
      console.error(e);
    }
  };
