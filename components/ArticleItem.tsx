import Link from "next/link";
import articleStyles from "../styles/Article.module.css";
import ArrowIcon from "./ArrowIcon";
import ImageItem from "./ImageItem";

const ArticleItem = ({ article }) => {
  return (
    <div className={articleStyles.card}>
      <div className={articleStyles.bodyType}>{article.bodyType}</div>
      <div className={articleStyles.title}>
        <strong>{article.modelName}</strong>
        <span className={articleStyles.ml}>{article.modelType}</span>
      </div>
      <ImageItem article={article}></ImageItem>
      <div className={articleStyles.linksContainer}>
        <div className={articleStyles.links}>
          <Link href={`/learn/${article.id}`}>Learn</Link>
          <ArrowIcon />
        </div>
        <div className={articleStyles.links}>
          <Link href={`/shop/${article.id}`}>Shop</Link>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
