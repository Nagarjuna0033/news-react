import React, { useCallback, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Error from "./Error";
import InfiniteScroll from "react-infinite-scroll-component";

import { useEffect } from "react";

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [load, setLoader] = useState(true);
    const [isLoad, setLoadInfo] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [status, setStatus] = useState("ok");

    const getUrl = () => {
        return `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    };

    const getNews = async () => {
        try {
            props.setProgressVal(10);
            props.setProgressVal(30);

            const res = await fetch(getUrl());
            const response = await res.json();
            props.setProgressVal(70);
            props.setProgressVal(100);
            setStatus("ok");
            return response;
        } catch (e) {
            setStatus("error");
        }
    };

    useEffect(() => {
        console.log("this is useEffect in news Component");

        getNews().then((e) => {
            if (e && e["status"] === "ok") {
                console.log(isLoad);
                let art = articles;
                // console.log(e);
                setStatus(e["Status"]);
                setArticles(art.concat(e["articles"]));
                setStatus(e["status"]);
                setTotalResults(e["totalResults"]);
                setLoader(false);
                setLoadInfo(true);
            } else {
                setStatus("error");
            }
        });
    }, [page]);

    const fetchMoreData = () => {
        setPage(page + 1);
    };

    return (
        <div className="container my-3" style={{ maxWidth: "900px" }}>
            <h3>Top Headlines-{props.cat}</h3>

            {status === "ok" ? (
                <InfiniteScroll
                    dataLength={isLoad && articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    className="container"
                    style={{ overflow: "hidden" }}
                >
                    <div className="container" style={{ overflow: "hidden" }}>
                        <div className="row">
                            {isLoad ? (
                                articles.map((element) => {
                                    return (
                                        <div
                                            className="col-md-4 my-3"
                                            key={element["url"]}
                                        >
                                            <NewsItem
                                                author={
                                                    element["author"]
                                                        ? element["author"]
                                                        : "Unknown"
                                                }
                                                date={element["publishedAt"]}
                                                title={
                                                    element["title"]
                                                        ? element["title"]
                                                        : ""
                                                }
                                                desc={
                                                    element["description"]
                                                        ? element[
                                                              "description"
                                                          ].slice(0, 75) + "..."
                                                        : ""
                                                }
                                                url={element["urlToImage"]}
                                                newsUrl={element["url"]}
                                            />
                                        </div>
                                    );
                                })
                            ) : (
                                <Spinner />
                            )}
                        </div>
                    </div>
                </InfiniteScroll>
            ) : (
                <Error />
            )}

            {/* <div className="container d-flex justify-content-between">
                <button
                    disabled={page <= 1}
                    className="btn btn-dark"
                    onClick={prevClick}
                >
                    &larr; Previous
                </button>
                <button
                    disabled={page >= 2}
                    className="btn btn-dark"
                    onClick={nextClick}
                >
                    Next &rarr;
                </button>
            </div> */}
        </div>
    );
}

{
    /* <div className="col-md-4 my-3">
                    <NewsItem
                        title="About cricket"
                        Desc="Description about cricket"
                        url="https://static.cricbuzz.com/a/img/v1/600x400/i1/c383868/veteran-akshay-wakhare-claimed.jpg"
                    />
                </div> */
}
