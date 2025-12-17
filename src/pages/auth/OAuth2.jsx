import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMeQuery } from "../../queries/usersQueries";

function OAuth2() {
    const navigate = useNavigate();
    // get요청에서 사용된 param을 가져옴
    const [ searchParams ] = useSearchParams(); 
    const accessToken = searchParams.get("accessToken");
    if (!!accessToken) {
            localStorage.setItem("AccessToken", accessToken);
        }
    const meQuery = useMeQuery();
    // 토큰이 일치하는지 확인하는 로직
    useEffect(() => {
        const {isLoading, data} = meQuery;
        if (!isLoading){
            if (data.status !== 200) {
                alert("인증이 필요합니다.");
                navigate("/auth/login");
            } else {
                alert("로그인 성공");
                navigate("/");
            }
        }
    }, [meQuery.data]);

    return <></>
}

export default OAuth2;