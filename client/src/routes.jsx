import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import Layout from "./components/Layout";
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])

export default router;