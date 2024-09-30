import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import Banner from '../../partials/Banner';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../../utils/ContextProvider';

function Dashboard() {
    const { token } = useStateContext()
    const [sidebarOpen, setSidebarOpen] = useState(false);

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