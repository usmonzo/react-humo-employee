import { createSlice } from '@reduxjs/toolkit';
import { BaseUrl } from '../../baseUrl';
import { apiUrl } from '../../utils/apiRoutes';
import { Axios } from '../../utils/axios';
import { setBtnLoading } from './btnLoading';

const initialState = {
  limit: null,
  total_score: null,
  loading: false,
};

export const scoreScoring = createSlice({
  name: 'scoreScoring',
  initialState,
  reducers: {
    setScoringData(state, action) {
      state.limit = action.payload.limit;
      state.total_score = action.payload.total_score;
    },
    setScoringBtnLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setScoringData, setScoringBtnLoading } = scoreScoring.actions;
export const scoringData = (state) => state.scoreScoring;
export const btnLoading = (state) => state.scoreScoring.loading;
export default scoreScoring.reducer;

export const getScoringData = (inn) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'access-control-allow-origin': '*',
      accept: 'application/json',
    },
  };
  try {
    dispatch(setScoringBtnLoading(true));
    const response = await Axios(
      `${BaseUrl + apiUrl.scoring + `?inn=${inn}`}`,
      requestOptions
    );
    const data = await response.data;
    const appData = data.payload;
    console.log('Scoring data', appData);
    dispatch(setScoringData(appData));
    dispatch(setScoringBtnLoading(false));
  } catch (e) {
    console.error(e);
  }
};
