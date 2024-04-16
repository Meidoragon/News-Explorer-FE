import { useState, useEffect } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

import { NewsArticle } from '../../utils/types';

interface CardListProps {
  articles: NewsArticle[];
}

function createCards(articleList: NewsArticle[], parentComponentName: string) {
  return (
    <ul className={`${parentComponentName}__article-cards`}>
      {articleList.map((card) => {
        return (
          <li key={card._id} className={`${parentComponentName}__article-card`}>
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

function NewsCardList({ articles }: CardListProps) {
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
      {createCards(visibleArticles, 'card-list')}
      <button
        type="button"
        className="card-list__extend-button"
        onClick={addMoreArticles}
      >
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;
