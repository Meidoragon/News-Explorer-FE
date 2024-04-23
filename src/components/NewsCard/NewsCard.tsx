import { ReactElement, useState } from 'react';
import './NewsCard.css';
import { NewsArticle } from '../../utils/types';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
// import activeBookmarkIcon from '../../images/icon_bookmark_active.svg';
// import inactiveBookmarkIcon from '../../images/icon_bookmark_inactive.svg';

interface NewsCardProps {
  article: NewsArticle;
}

function NewsCard({ article }: NewsCardProps): ReactElement {
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  const handleMouseHover = () => {
    // TODO: further logic for if user is logged in
    setTooltipVisibility(!tooltipVisibility);
  };

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
        {/* @ts-expect-error: the issue with article.source is known, I will fix it later. TODO */}
        <p className="news-card__source">{article.source.name || ''}</p>
      </div>
      <div className="news-card__save-wrapper">
        <button
          type="button"
          aria-label="bookmark button"
          className="news-card__bookmark-button"
          onMouseEnter={handleMouseHover}
          onMouseLeave={handleMouseHover}
        >
          <BookmarkIcon name="news-card__bookmark-icon" />
        </button>
        <p
          className="news-card__tooltip"
          // inline styles required for testing
          style={{ display: tooltipVisibility ? 'block' : 'none' }}
          data-testid="tooltip"
        >
          Sign in to save articles
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
