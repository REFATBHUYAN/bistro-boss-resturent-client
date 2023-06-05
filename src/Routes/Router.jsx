import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import Secrate from "../Pages/Shared/Secrate";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart";
import AllUsers from "../Pages/DashBoard/AllUsers";
import AddItem from "../Pages/DashBoard/AddItem";
import AdminRoute from "../Provider/AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems";
import Payment from "../Pages/DashBoard/Payment";
import UserHome from "../Pages/DashBoard/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'menu',
            element: <Menu></Menu>
        },
        {
            path: 'order/:category',
            element: <Order></Order>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/secret',
            element: <PrivateRoute><Secrate></Secrate></PrivateRoute>
        }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
    children:[
        {
            path: 'userhome',
            element: <UserHome></UserHome>
        },
        {
            path: 'mycart',
            element: <MyCart></MyCart>
        },
        {
            path: 'payment',
            element: <Payment></Payment>
        },
        // admin route
        {
            path: 'adminhome',
            element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
            path: 'allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
            path: 'addItem',
            element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
            path: 'manageitems',
            element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        
    ]
  }
]);

export default router;