import { Route, Routes } from 'react-router-dom';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articleList, setArticlesList] = useState<NewsArticle[]>(testArticles);
  const [currentSearchState, setCurrentSearchState] = useState<SearchState>(
    SearchState.None
  );

  const header = (
    <Header
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      userName="PH_User"
    />
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section className="background-wrapper">
                {header}
                <Main />
              </section>
              {currentSearchState === SearchState.Complete && (
                <NewsCardList articles={articleList} />
              )}
              {currentSearchState === SearchState.Searching && <Preloader />}
              <About />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <>
              {header}
              <SavedNews />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// {
/* <Route exact path="/saved-news">
        //   <Header
        //     isLoggedIn={isLoggedIn}
        //     setIsLoggedIn={setIsLoggedIn}
        //     userName="PH_User"
        //   />
        //   <Footer />
        // </Route>
        */
// }
