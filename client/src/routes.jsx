import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Login from './pages/Login';
import Layout from "./components/Layout";
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
                handle: {
                    title: "Dashboard"
                }
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/patients",
                element: <Patients />,
                handle: {
                    title: "Pacientes"
                }
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])

export default router;