/** @jsxImportSource @emotion/react */
import Loading from "../../components/common/Loading";
import { useGetFeeds } from "../../queries/postQueries";
import  * as s  from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { FadeLoader } from "react-spinners";

function Home() {
    const { isLoading, isFetching, isPending, data, hasNextPage, fetchNextPage } = useGetFeeds();
    const loadMoreRef = useRef();
    console.log(isFetching);
    console.log(isLoading);
    console.log(isPending);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [obs] = entries;
            if (obs.isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        }, {threshold: 1});

        observer.observe(loadMoreRef.current);
    }, [hasNextPage]);

    return <div css={s.layout}>
        <div css={s.feedContainer} >
            {
                (isLoading && <Loading />) 
                || data.pages.map(feeds => 
                    feeds.data.contents.map(feed => (
                    <div key={feed.feedId} css={s.feedItemContainer}>
                        <header>
                            <div css={s.profileImage(feed.user?.imgUrl)}></div>
                            <div css={s.userInfo}>
                                <div>{feed.user?.nickname}</div>
                                <div>{feed.createdAt}</div>
                            </div>
                        </header>
                        <main>
                            {
                                feed.imageFiles &&
                                <div css={s.feedImageContainer}>
                                    <Slider
                                        infinite= {true}
                                        speed= {500}
                                        slidesToShow= {1}
                                        slidesToScroll= {1}>
                                            {
                                                feed.imageFiles.map(file => (
                                                    <div css={s.feedImage("http://localhost:8080/image" + file.filePath)}>
                                                    </div>
                                                ))
                                            }
                                    </Slider>
                                </div>
                            }
                            <div css={s.feedContentContainer}>
                                {feed.content}
                            </div>
                        </main>
                        <footer>

                        </footer>
                    </div>
                )))
            }
            <div ref={loadMoreRef} style={{padding: "10px 0"}}>
                {
                    isFetching &&
                    <FadeLoader />
                }
            </div>
        </div>
        <div css={s.followInfoContainer} ></div>
    </div>
}

export default Home;