/** @jsxImportSource @emotion/react */
import { PacmanLoader } from "react-spinners";
import * as s from "./styles";


function Loading() {
    return <div css={s.LoadingBox}>
        <PacmanLoader color="#ffffff" loading={true} size={70} />
    </div>
}

export default Loading;