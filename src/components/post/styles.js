import { css } from "@emotion/react";

export const modalLayout = css`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;

    & > header {
        box-sizing: border-box;
        padding: 10px 20px;
        height: 50px;

        & > h2 {
            margin: 0;
            color: #222222;
            cursor: default;
        }
    }

    & > main {
        box-sizing: border-box;
        padding: 10px 20px;
        flex-grow: 1;
    }

    & > footer {
        display: flex;
        justify-content: flex-end; //우측으로
        box-sizing: border-box;
        padding: 10px 20px;
        height: 50px;

        & > button {
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            border: none;
            background-color: transparent;
            cursor: pointer;
            font-size: 16px;
        }
    }
`;

export const postButton = css`
    text-shadow: 0 0 10px #000000aa;
    &:disabled {
        cursor: default;
        color: #777777;
    }
`;

export const profileContainer = css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 10px;
    cursor: default;
`;

export const profileImg = (url) => css`
    margin-right: 10px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-image: url(${url});
    background-position: center;
    background-size: cover;
`;
    
export const contentInputBox = css`
    margin: 10px 0;
    
    & > textarea{
        box-sizing: border-box;
        outline: none;
        border: 1px solid #cccccc;
        border-radius: 4px;
        padding: 5px 10px;
        width: 100%;
        height: 80px;
        resize: none;
        font-size: 15px;
        color: #222222;
        cursor: pointer;
    }
`;

export const uploadBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px dashed #cccccc;
    border-radius: 4px;
    padding: 10px;
    color: #222222;
    cursor: pointer;

    & > button {
        margin: 10px 0 0;
        border: none;
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
    }
`;

export const imageListBox = css`
    display: flex;
    gap: 5px;
    box-sizing: border-box;
    margin-top: 10px;
    border-radius: 4px;
    padding: 5px;
    width: 100%;
    height: 90px;
    background-color: #fafafa;
    overflow-x: auto;
    overflow-y: hidden;

`;

export const preview = (url) => css`
flex-shrink: 0;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    width: 70px;
    height: 70px;
    background-image: url(${url});
    background-position: center;
    background-size: cover;

    // 마우스를 올렸을 때 취소버튼이 생기도록 세팅
    &:not(:hover) > div { 
        opacity: 0; // 투명도
    }

    & > div {
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        border-radius: 8px;
        width: 40px;
        height: 40px;
        font-size: 20px;
        color: #ffffff;
        background-color: #00000066;
        cursor: pointer;
    }
`;