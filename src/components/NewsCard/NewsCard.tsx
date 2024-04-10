import './NewsCard.css';
import { NewsArticle } from '../../utils/types';
import activeBookmarkIcon from '../../images/icon_bookmark_active.svg';
import inactiveBookmarkIcon from '../../images/icon_bookmark_inactive.svg';

interface NewsCardProps {
  article: NewsArticle;
  isSaved?: boolean;
}

function NewsCard({ article, isSaved }: NewsCardProps): JSXElement {
  return (
    <div className="news-card">
      <img
        className="news-card__image"
        src={article.urlToImage}
        alt={`${article.title} BG`}
      />
      <div className="news-card__text-wrapper">
        <p className="news-card__date">{article.publishedAt}</p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__text">
          {article.description || article.content}
        </p>
        <p className="news-card__source">{article.source.name}</p>
      </div>
      <button type="button" className="news-card__bookmark-button">
        <img
          className="news-card__bookmark-icon"
          src={isSaved ? activeBookmarkIcon : inactiveBookmarkIcon}
          alt="bookmark icon"
        />
      </button>
    </div>
  );
}

export default NewsCard;
