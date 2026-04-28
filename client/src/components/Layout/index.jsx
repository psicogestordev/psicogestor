import { Outlet } from "react-router-dom"

import Navbar from '../Navbar'
import Header from '../Header'

function Layout() {
    return (
        <>
            <Navbar />
            <Header />
            <Outlet />
        </>
    )
}

export default Layout