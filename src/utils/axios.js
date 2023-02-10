import axios from "axios";
import { BaseUrl } from "../baseUrl";
import { apiUrl } from "./apiRoutes";

export const Axios = axios.create({
  baseURL: `${BaseUrl}`,
});

let refreshRequest = null;

Axios.interceptors.request.use(
  function (config) {
    const access_token = getToken();
    config.headers["Authorization"] = access_token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  async function (response) {
    if (response.data.code === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/";
    } else if (response.data.code === 403) {
      if (!refreshRequest) {
        refreshRequest = sendRefreshRequest();
      }
      await refreshRequest;
      const access_token = getToken();
      if (access_token) {
        return Axios(response.config);
      }
      refreshRequest = null;
    }
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/login";
    } else if (error.response.status === 403) {
      if (!refreshRequest) {
        refreshRequest = sendRefreshRequest();
      }
      await refreshRequest;
      const access_token = getToken();
      if (access_token) {
        return Axios(error.config);
      }
      refreshRequest = null;
    }
    return Promise.reject(error);
  }
);

function sendRefreshRequest() {
  // const token = getToken();
  const refreshToken = getRefreshToken();
  return Axios(`${apiUrl.refreshToken}?token=${refreshToken}`, {
    method: "GET",
  })
    .then(function (response) {
      const { data } = response;
      setToken(data.payload.access_token);
      setRefreshToken(data.payload.refresh_token);
      const access_token = getToken();
      Axios.defaults.headers.common["token"] = access_token;
      refreshRequest = null;
    })
    .catch(function (error) {
      localStorage.removeItem("token");
    });
}

//
//
//
//
//
//

export const setToken = (token) => {
  // Bearer
  // localStorage.setItem("token", JSON.stringify(token));
  localStorage.setItem("token", JSON.stringify("Bearer " + token));
};

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem("refresh_token", refreshToken);
};

export const getToken = () => {
  if (localStorage.getItem("token")) {
    return JSON.parse(localStorage.getItem("token"));
  }
};
export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

export const logout = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  navigate("/");
};
