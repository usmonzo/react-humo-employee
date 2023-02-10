import { Navigate } from "react-router-dom";
import { getToken } from "./axios";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = {
    token: getToken(),
  };
  return <>{!auth.token ? <Navigate to="/" /> : children}</>;
};

export default PrivateRoute;
