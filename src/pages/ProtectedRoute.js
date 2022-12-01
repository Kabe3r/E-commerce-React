import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({children}) => {
  const {isAuthenticated, user} = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    isUser ? <Outlet />: <Navigate to='/' />
  );
};
export default ProtectedRoute;