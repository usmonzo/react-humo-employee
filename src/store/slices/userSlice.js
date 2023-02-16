import { createSlice } from '@reduxjs/toolkit';
import { BaseUrl } from '../../baseUrl';
import { apiUrl } from '../../utils/apiRoutes';
import { Axios, setRefreshToken, setToken } from '../../utils/axios';

const initialState = {
  login: null,
  password: '',
  token: '',
  loading: false,
  id: null,
  code: '',
  errorAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { login, password } = action.payload;
      state.login = Number(login);
      state.password = password;
      // state.user = action.payload;
    },
    setToktoken(state, action) {
      state.token = action.payload;
      // потомучто уже есть такая функция в аксиос
    },
    removeUser(state) {
      state.login = '';
      state.password = '';
      state.token = '';
    },
    changeLoading(state, action) {
      state.loading = action.payload;
    },
    GetId(state, action) {
      state.id = action.payload;
    },
    GetCode(state, action) {
      state.code = action.payload;
    },
    setErrorAuth(state, action) {
      state.errorAuth = action.payload;
    },
  },
});
export const currentId = (state) => state.user.id;
export const currentOtpCode = (state) => state.user.code;
export const currentUser = (state) => state.user;
export const getCurrentUser = (state) => state.user;
export const authBtnLoading = (state) => state.user.loading;
export const errorAuth = (state) => state.user.errorAuth;

export const {
  setUser,
  removeUser,
  changeLoading,
  GetId,
  GetCode,
  setToktoken,
  setErrorAuth,
} = userSlice.actions;

export default userSlice.reducer;

export const handleLogin = (login, password, navigate) => async (dispatch) => {
  const auth = { login: +login, password };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    data: auth,
  };
  // console.log(auth);

  try {
    dispatch(changeLoading(true));
    const response = await Axios(`${BaseUrl + apiUrl.login}`, requestOptions);
    const data = await response.data;
    console.log(data.code);
    dispatch(changeLoading(false));
    dispatch(setErrorAuth(false));
    const appData = data.payload;
    setToken(appData.access_token);
    setRefreshToken(appData.refresh_token);
    navigate('/main');
  } catch (e) {
    dispatch(setErrorAuth(true));
    dispatch(changeLoading(false));
    console.error(e);
  }
};

export const handleForgetPass = (id, navigate) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  try {
    const response = await fetch(
      `https://hp-xmlgate-test.humo.tj/orzu/auth/underwriter/otp/send?underwriter_id=${id}`,
      requestOptions
    );
    if (response.status === 200) {
      navigate('/otp');
    }
  } catch (e) {
    console.error(e); //обработка ошибок
  }
};

export const handleOTPPass = (id, newCode, navigate) => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  try {
    const response = await fetch(
      `https://hp-xmlgate-test.humo.tj/orzu/auth/underwriter/otp/check?underwriter_id=${id}&code=${newCode}`,
      requestOptions
    );
    if (response.status === 200) {
      navigate('/new_password');
    }
  } catch (e) {
    console.error(e);
  }
};
export const handleNewPassword =
  (id, oldCode, newPassword, navigate) => async (dispatch) => {
    const otpReset = {
      underwriter_id: +id,
      code: oldCode,
      password: newPassword,
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(otpReset),
    };

    try {
      const response = await fetch(
        'https://hp-xmlgate-test.humo.tj/orzu/auth/underwriter/otp/reset',
        requestOptions
      );
      if (response.status === 200) {
        navigate('/');
      }
    } catch (e) {
      console.error(e); //обработка ошибок
    }
  };
