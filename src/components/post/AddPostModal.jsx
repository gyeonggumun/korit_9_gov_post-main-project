/** @jsxImportSource @emotion/react */
import ReactModal from "react-modal";
import  * as s  from "./styles";
import { useMeQuery } from "../../queries/usersQueries";
import Loading from "../common/Loading";
import Select from "react-select";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useRef, useState } from "react";

function AddPostModal({isOpen, onRequestClose, layoutRef}) {
    const [ uploadImages, setUploadImages ] = useState([]);
    const imageListBoxRef = useRef();
    const {isLoading, data} = useMeQuery();

    const handleOnWheel = (e) => {
        imageListBoxRef.current.scrollLeft += e.deltaY;
    }

    // 이미지 리스트를 받는 click 생성
    const handleFileLoadOnClick = () => {
        const fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("accept", "image/*");
        fileInput.setAttribute("multiple", "true");
        fileInput.click();
        fileInput.onchange = (e) => {
            const {files} = e.target;
            const fileArray = Array.from(files);

            const readFile = (file) => new Promise((resolve) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = (e) => {
                    resolve({
                        file,
                        dataUrl: e.target.result,
                    })
                }
            });
            Promise.all(fileArray.map(file => readFile(file)))
            .then(result => {
                setUploadImages([...uploadImages, ...result]);
            })
        }
    }

    // 이미지 삭제 클릭 로직
    const handleImageDeleteOnClick = (index) => {
        const deletedImages = uploadImages.filter((img, imgIndex) => imgIndex !== index);
        setUploadImages(deletedImages);
    }
        
    

    if (isLoading) {
        return <Loading />
    }
    // content => 안에 들어있는 박스, overlay => 바깥 바탕
    return <ReactModal 
        style={{
            overlay: {
                position: "absolute",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00000000",
            },
            content: {
                position: "static",
                boxShadow: "0 0 5px 5px #00000033",
                padding: "0",
            }
        }}
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        parentSelector={() => layoutRef.current}
        appElement={layoutRef.current}
        ariaHideApp={false}>
            <div css={s.modalLayout}>
                <header>
                    <h2>Add a Post</h2>
                </header>
                <main>
                    <div css={s.profileContainer}>
                        <div css={s.profileImg(data.data.imgUrl)}></div>
                            <div>{data.data.nickname}</div>
                    </div>
                    <Select 
                        options={[
                            {
                                label: "Public",
                                value: "Public"
                            },
                            {
                                label: "Follow",
                                value: "Follow"
                            },
                        ]}/>                       
                    <div css={s.contentInputBox}>
                        <textarea></textarea>
                    </div>
                    <div css={s.uploadBox} onClick={handleFileLoadOnClick}>
                        <IoCloudUploadOutline />
                        <div>Please Post your story.</div>
                        <button>Add Image</button>
                    </div>
                    <div css={s.imageListBox} ref={imageListBoxRef} onWheel={handleOnWheel}>
                        {
                            uploadImages.map((img, index) => (
                                <div css={s.preview(img.dataUrl)}>
                                    <div onClick={() => handleImageDeleteOnClick(index)}><IoIosClose /></div>
                                </div>
                            ))
                        }
                        
                    </div>
                </main>
                <footer>
                    <button css={s.postButton}>Post</button>
                    <button onClick={onRequestClose}>Cancle</button>
                </footer>
            </div>
    </ReactModal>

}

export default AddPostModal;