import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CaseRegistration from "./components/home/CaseRegistration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/register-case',
        element: <CaseRegistration />
    }
])
export default router;