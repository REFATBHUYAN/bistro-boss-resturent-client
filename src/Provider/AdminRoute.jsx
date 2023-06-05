import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(user && isAdmin){
        return children;
    }
    if(loading || isAdminLoading){
        return <div>loading............</div>
    }
    return <Navigate to='/' state={{from: location}} replace={true}></Navigate>
};

export default AdminRoute;