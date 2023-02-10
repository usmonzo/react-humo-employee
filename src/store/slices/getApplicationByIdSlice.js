import { createSlice } from '@reduxjs/toolkit';
import { BaseUrl } from '../../baseUrl';
import { apiUrl } from '../../utils/apiRoutes';
// import { BaseUrl } from '../../baseUrl';
// import { apiUrl } from '../../utils/apiRoutes';
import { Axios } from '../../utils/axios';

const initialState = {
  cft: {
    client_information: {
      id: null,
      surname: '',
      name: '',
      patronymic: '',
      birthday: '',
      inn: '',
      birth_place: '',
      citizen: '',
      reg_number: null,
      marige_status: '',
      gender: '',
    },
    certificate: {
      doc_type: '',
      passport_seria: '',
      passport_number: '',
      passport_who_issued: '',
      passport_issue_date: '',
      passport_expire_date: '',
    },
    address: {
      address_type: '',
      city: '',
      region: '',
      district: '',
      street: '',
      house: '',
      korpus: '',
      flat: '',
    },
    credit_information: {
      credit_product: '',
      credit_goal: '',
      credit_goal_description: '',
      credit_sum: null,
      credit_term: null,
      credit_limit: null,
      interest_rate: null,
      orzu_id: null,
      phone_number: '',
      credit_coefficient: null,
    },
    financial_information: {
      family_count_num: null,
      dependencies_num: null,
      monthly_income: null,
      family_expenses_of_client_per_month: null,
      operational_monthly_charges: null,
      family_expenses_per_month: null,
      has_estate: '',
      has_car: '',
    },
    work_place: {
      work_place_city: '',
      work_place_locality: '',
      work_place_full_address: '',
      work_place_scope: '',
      work_experience_num: null,
    },
  },
  employee: {
    client_information: {
      id: null,
      fio: '',
      date_of_birth: '',
      inn: '',
      citizenship: null,
      registration_number: null,
      marital_status: '',
      gender: '',
    },
    certificate: {
      doc_type: '',
      passport_seria: '',
      passport_number: '',
      passport_who_issued: '',
      passport_issue_date: '',
      passport_expire_date: '',
    },
    address: {
      address_type: '',
      city: '',
      locality: '',
      district: '',
      full_address: '',
    },
    credit_information: {
      credit_product: '',
      credit_goal: '',
      credit_goal_description: '',
      credit_sum: null,
      credit_term: null,
      credit_limit: null,
      interest_rate: null,
      orzu_id: null,
      phone_number: '',
    },
    financial_information: {
      family_count_num: null,
      dependencies_num: null,
      monthly_income: null,
      family_expenses_of_client_per_month: null,
      operational_monthly_charges: null,
      family_expenses_per_month: null,
      has_estate: '',
      has_car: '',
      monthly_avg_income: null,
      expenses_per_family_member_per_month: null,
    },
    work_place: {
      work_place_city: '',
      work_place_locality: '',
      work_place_full_address: '',
      work_place_scope: '',
      work_experience_num: null,
    },
    recommenders: {
      recommender_fio1: '',
      recommender_relation1: '',
      recommender_phone_number1: '',
      recommender_fio2: '',
      recommender_relation2: '',
      recommender_phone_number2: '',
    },
  },
  files: [],
  filesID: null,
  fileImg: '',
  loading: false,
};
export const ApplicationByIdSlice = createSlice({
  name: 'application_by_id',
  initialState,
  reducers: {
    setGrayBoxData(state, action) {
      state.employee = action.payload;
    },
    setInputData(state, action) {
      state.cft = action.payload;
    },
    setFilesData(state, action) {
      state.files = action.payload;
    },
    setFilesID(state, action) {
      state.filesID = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setFileImg(state, action) {
      state.fileImg = action.payload;
    },
  },
});

export const {
  setGrayBoxData,
  setInputData,
  setLoading,
  setFilesData,
  setFilesID,
  setFileImg,
} = ApplicationByIdSlice.actions;

export const fillTheInput = (state) => state.applications_byid.cft;
export const fillTheGrayBox = (state) => state.applications_byid.employee;
export const fillTheFiles = (state) => state.applications_byid.files;
export const fillTheFilesID = (state) => state.applications_byid.filesID;
export const fileData = (state) => state.applications_byid.fileImg;
export const loading = (state) => state.applications_byid.loading;

export default ApplicationByIdSlice.reducer;

export const getMyApplicationsById = (id, navigate) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*',
      accept: 'application/json',
    },
  };

  try {
    dispatch(setLoading(true));
    // console.log(loading);
    const response = await Axios(
      `https://hp-xmlgate-test.humo.tj/orzu/underwriter/getApplicationById?id=${id}`,
      requestOptions
    );
    const data = await response.data;
    const cftData = data.payload.cft;
    const employeeData = data.payload.employee;
    const documentsFiles = data.payload.files;
    dispatch(setGrayBoxData(employeeData));
    dispatch(setInputData(cftData));
    dispatch(setFilesData(documentsFiles));
    dispatch(setFilesID(documentsFiles[0].id));
    dispatch(setLoading(false));
    // console.log(loading);
    // console.log('graybox', employeeData);
    // console.log('inputs', cftData);
  } catch (e) {
    dispatch(setLoading(false));
    console.error(e);
  }
};
export const getFilesById = (fileId) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*',
      accept: 'application/json',
    },
  };

  try {
    dispatch(setLoading(true));
    // console.log(loading);
    const response = await Axios(
      `${BaseUrl + apiUrl.filesById + `?fileID=${fileId}`}`,
      requestOptions
    );
    const data = await response.data.payload;
    dispatch(setFileImg(data));

    // const files = data.payload;
  } catch (e) {
    dispatch(setLoading(false));
    console.error(e);
  }
};
