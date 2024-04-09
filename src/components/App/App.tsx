import { useState } from 'react';
import Header from '../Header/Header';
import './App.css';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
      <About />
      <Footer />
    </>
  );
}

export default App;
