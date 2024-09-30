import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./pages/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import CaseRegistration from "./pages/CaseRegistration";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AuthLayout from "./pages/layouts/AuthLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/',
                element: <Login />
            }
        ]
    },
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/case-reg',
                element: <CaseRegistration />
            },
        ]
    }


])
export default router;