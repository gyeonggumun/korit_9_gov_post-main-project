import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";

function AuthRoute() {
    return <Routes>
        <Route path="/auth/login" element={<Login />}/>
        <Route path="/auth/signup" element={<SignUp />}/>
    </Routes>
}

export default AuthRoute;