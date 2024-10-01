import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../utils/ContextProvider'

const AuthLayout = () => {
    const { token } = useStateContext()
    if (token) {
        return <Navigate to="/dashboard" />
    }
    return (
        <>
            <main className="grow">
                <Outlet />
            </main>
        </>
    )
}

export default AuthLayout
