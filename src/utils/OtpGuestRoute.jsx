import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { currentId } from '../store/slices/userSlice';

const OtpGuestRoute = ({ children, ...rest }) => {
  let user = {
    phone: useSelector(currentId),
  };
  return <>{!user.phone ? <Navigate to="/forgot_password" /> : children};</>;
};

export default OtpGuestRoute;
