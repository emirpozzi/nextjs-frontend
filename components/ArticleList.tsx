import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";
import { useState } from "react";
import SlideshowButton from "./SlideshowButton";

const ArticleList = ({ articles }) => {
  const [shownArticles, setShownArticles] = useState(articles.slice(0, 4));

  return (
    <>
      <div className={articleStyles.grid}>
        {shownArticles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
      <div className={articleStyles.buttons}>
        <div className={articleStyles.button}>
          <SlideshowButton
            onClick={() => setShownArticles(articles.slice(0, 4))}
            orientation="left"
          ></SlideshowButton>
        </div>
        <div className={articleStyles.button}>
          <SlideshowButton
            onClick={() => setShownArticles(articles.slice(4, 8))}
            orientation="right"
          ></SlideshowButton>
        </div>
      </div>
    </>
  );
};

export default ArticleList;
