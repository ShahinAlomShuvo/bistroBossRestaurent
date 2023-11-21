import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FadeLoader } from "react-spinners";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isAdmin, isPending] = useAdmin();

  if (loading || isPending) {
    return (
      <div className='flex justify-center items-center py-40'>
        <FadeLoader color='#36d7b7' />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
