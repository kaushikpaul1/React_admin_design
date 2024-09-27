import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./pages/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import CaseRegistration from "./pages/CaseRegistration";
import Register from "./pages/auth/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/case-reg',
                element: <CaseRegistration />
            },
        ]
    },
    {
        path:'/register',
        element: <Register/>
    }
])
export default router;