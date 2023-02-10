import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { currentId, currentOtpCode } from '../store/slices/userSlice';

const NewPasswordGuestRoute = ({ children, ...rest }) => {
  let user = {
    id: useSelector(currentId),
    code: useSelector(currentOtpCode),
  };
  return (
    <>
      {!user.code && !user.id ? <Navigate to="/forgot_password" /> : children};
    </>
  );
};

export default NewPasswordGuestRoute;
