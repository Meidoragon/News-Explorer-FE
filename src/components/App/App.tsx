import { ReactElement, useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import Main from '../Main/Main';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';

import testArticles from '../../utils/testArticles';
import { NewsArticle } from '../../utils/types';
import Preloader from '../Preloader/Preloader';

enum SearchState {
  None,
  Searching,
  Complete,
}

function App(): ReactElement {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [articleList, setArticlesList] = useState<NewsArticle[]>(testArticles);
  const [currentSearchState, setCurrentSearchState] = useState<SearchState>(
    SearchState.Searching
  );
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
      {currentSearchState === SearchState.Complete && (
        <NewsCardList articles={articleList} />
      )}
      {currentSearchState === SearchState.Searching && <Preloader />}
      <About />
      <Footer />
    </>
  );
}

export default App;
