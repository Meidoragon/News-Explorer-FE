// import { useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

import { NewsArticle } from '../../utils/types';

interface CardListProps {
  articles: NewsArticle[];
}

function NewsCardList({ articles }: CardListProps) {
  // const [visibleArticles, setVisibleArticles] = useState<NewsArticle[]>([]);

  // function pushThree(list: NewsArticle[]): NewsArticle[] {}

  function createCards(
    articleList: NewsArticle[],
    parentComponentName: string
  ) {
    return (
      <ul className={`${parentComponentName}__article-cards`}>
        {articleList.map((card) => {
          return (
            <li
              key={card._id}
              className={`${parentComponentName}__article-card`}
            >
              <NewsCard article={card} />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <section className="card-list">
      <h2 className="card-list__header">Search results</h2>
      {createCards([articles[0], articles[1], articles[2]], 'card-list')}
      <button type="button" className="card-list__extend-button">
        Show more
      </button>
    </section>
  );
}

export default NewsCardList;
