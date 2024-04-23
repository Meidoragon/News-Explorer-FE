import { useState, useEffect, ReactElement } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

import { NewsArticle } from '../../utils/types';

interface CardListProps {
  articles: NewsArticle[];
}

function createCards(articleList: NewsArticle[]): ReactElement {
  return (
    <ul className="card-list__article-cards">
      {articleList.map((card) => {
        return (
          <li key={card._id} className="card-list__article-card">
            <NewsCard article={card} />
          </li>
        );
      })}
    </ul>
  );
}

function getThreeArticles(
  articles: NewsArticle[],
  limit: number
): NewsArticle[] {
  // @ts-expect-error: we do not care about item, but item is the first parameter passed by the filter function
  return articles.filter((item, index) => {
    return index < limit;
  });
}

function NewsCardList({ articles }: CardListProps): ReactElement {
  const [visibleArticles, setVisibleArticles] = useState<NewsArticle[]>([]);
  const [articleCount, setArticleCount] = useState<number>(3);

  const addMoreArticles = () => {
    if (articleCount < articles.length) {
      setArticleCount(articleCount + 3);
    }
  };

  useEffect(() => {
    setVisibleArticles(getThreeArticles(articles, articleCount));
  }, [articles, articleCount]);

  return (
    <section className="card-list">
      <h2 className="card-list__header">Search results</h2>
      {createCards(visibleArticles)}
      <button
        type="button"
        className={`card-list__extend-button ${articleCount < articles.length ? 'button-active' : ''}`}
        onClick={addMoreArticles}
        name="show-more"
      >
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;
