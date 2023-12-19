import { Outlet, Navigate } from "react-router-dom"

function AuthRequired() {
    const isLoggedIn = true
    
    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/login" 
                replace
            />)
    }
    return <Outlet />
}

export default AuthRequired;