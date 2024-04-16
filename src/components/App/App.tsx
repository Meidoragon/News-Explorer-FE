import { ReactElement, useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import Main from '../Main/Main';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';

import testArticles from '../../utils/testArticles';
import { NewsArticle } from '../../utils/types';

function App(): ReactElement {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [articleList, setArticlesList] = useState<NewsArticle[]>(testArticles);

  return (
    <>
      <section className="background-wrapper">
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userName="PH_User"
        />
        <Main />
      </section>
      {articleList.length > 0 ? <NewsCardList articles={articleList} /> : ''}
      <About />
      <Footer />
    </>
  );
}

export default App;
