import { Outlet, Navigate } from "react-router-dom"

function AuthRequired() {
    const isLoggedIn = true
    
    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/SignUp" 
                replace
            />)
    }
    return <Outlet />
}

export default AuthRequired;