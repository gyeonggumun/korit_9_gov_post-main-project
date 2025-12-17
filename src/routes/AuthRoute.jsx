import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import { useEffect } from "react";
import OAuth2 from "../pages/auth/OAuth2";
import { useMeQuery } from "../queries/usersQueries";
import Logout from "../pages/auth/Logout";
import Loading from "../components/common/Loading";
import Home from "../pages/home/Home";
import LeftSideBar from "../components/common/LeftSideBar";

function AuthRoute() {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;

    const meQuery = useMeQuery();

    useEffect(() => {
        const { isLoading, data } = meQuery;
        // 잘 못된 경로로 들어온 사람을 올바른 경로로 이동시켜주는 로직
        if (!isLoading) {
            if (data.status !== 200) {
                // 로그인 버튼을 눌렀을 때 로그인이 되어 있지 않은 상태라면 로그인 페이지로 이동시켜줌
                if (!pathname.startsWith("/auth")) {
                    navigate("/auth/login");
                }
            } else {
                // 로그인이 되어있는 상태인데 로그인 페이지로 넘어가려 하면 홈화면으로 이동시켜줌
                if (pathname.startsWith("/auth")) {
                    navigate("/");
                }
            }
        }
    }, [pathname, meQuery.data]);

    if (meQuery.isLoading) {
        return <Loading />;
    }
    if (meQuery.isSuccess && meQuery.data.status !== 200) {
        return <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/login/oauth2" element={<OAuth2 />} />
        </Routes>
    }

    return <LeftSideBar>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    </LeftSideBar>
}

export default AuthRoute;