import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import applicationsReducer from './slices/applicationsSlice';
import myApplicationsSlice from './slices/myApplicationsSlice';
import takeApplicationsSlice from './slices/takeApplicationsSlice';
import getApplicationByIdSlice from './slices/getApplicationByIdSlice';
import staticData from './slices/getStaticDataSlice';
import phoneNumbersCheck from './slices/checkPhoneNumbersSlice';
import scoreScoring from './slices/scoreScoring';
import btnLoading from './slices/btnLoading';

export const store = configureStore({
  reducer: {
    user: userReducer,
    applications: applicationsReducer,
    myApplication: myApplicationsSlice,
    newApplication: takeApplicationsSlice,
    applications_byid: getApplicationByIdSlice,
    static_data: staticData,
    phone_overlaps: phoneNumbersCheck,
    scoreScoring: scoreScoring,
    btnLoader: btnLoading,
  },
});
