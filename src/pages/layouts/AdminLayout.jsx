import React, { useState, useEffect } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import Banner from '../../partials/Banner';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../../utils/ContextProvider';

function Dashboard() {
    const { token, setRole } = useStateContext()
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        // const role = localStorage.getItem('userRole');
        const storedRole = JSON.parse(localStorage.getItem('userRole'));
        setRole(storedRole);  
        // console.log('User role:', storedRole);
    }, [setRole]);
  


    return (!token) ? (<Navigate to="/" />) : (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main className="grow">
                    <Outlet />
                </main>

                <Banner />

            </div>
        </div>
    );
}

export default Dashboard;