import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "./pages/layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import CaseRegistration from "./pages/CaseRegistration";

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
])
export default router;