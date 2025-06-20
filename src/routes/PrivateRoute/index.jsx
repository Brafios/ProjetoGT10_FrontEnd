import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  
  const session = localStorage.getItem('supabase.session');

  return session ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;