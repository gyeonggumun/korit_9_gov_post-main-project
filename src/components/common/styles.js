import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const frame = css`
    display: flex;
    box-sizing: border-box;
    border: 3px solid #747474;
    border-radius: 30px;
    padding: 30px;
    width: 1000px;
    height: 650px;
    background-color: #000000;
`;

export const frameContainer = css`
    position: relative;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;
    overflow: hidden;
`;


//////////////<<  Loading  >>///////////////
export const LoadingBox = css`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
left: 0;
z-index: 99;
width: 100%;
height: 100%;
background-color: #00000066;
`
