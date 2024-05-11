import React, { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Component(props) {
    const { mode, pageSize, country, category, setProgress, apiKey } = props;
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProgress(0);
        setPage(1);
        window.scrollTo(0, 0);
    }, [category, setProgress]);

    const fetchArticles = useCallback(async () => {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
            let response = await fetch(url);
            let data = await response.json();
            if (page === 1) {
                setArticles(data.articles);
            } else {
                setArticles((prevArticles) => {
                    let updatedArticles = prevArticles.slice();
                    data.articles.forEach((article) => {
                        updatedArticles.push(article);
                    });
                    return updatedArticles;
                });
            }
            setTotalResult(data.totalResults);
            setLoading(false);
            setProgress(100);
        } catch (error) {
            console.log("Error occurred while fetching articles:", error);
            setLoading(false);
            setProgress(100);
        }
        document.title = `DailyUpdate - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }, [page, pageSize, category, country, apiKey, setProgress]);

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    const fetchMoreData = () => {
        setPage(page + 1);
    }

    return (
        <>
            <h2 className={`text-center text-${mode === "dark" ? "light" : "dark"} my-3`}>
                DailyUpdate - Top Headlines From{" "}
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResult}
                loader={<Spinner mode={mode} />}
            >
               <div className="container">
               <div className="row">
                        {loading ? (
                                <Spinner mode={mode} />
                            ) : (
                            articles.map((element, index) => (
                                <div className="col-md-4" key={index}>
                                    <NewsItem
                                        mode={mode}
                                        title={element.title}
                                        description={element.description}
                                        imgUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        PublishedAt={element.publishedAt}
                                        author={element.author}
                                        source={element.source.name}
                                    />
                                </div>
                            )))
                        }
                </div>
               </div>
            </InfiniteScroll>
        </>
    );
}

