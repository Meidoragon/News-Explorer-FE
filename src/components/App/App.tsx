import { useState } from 'react';
import Header from '../Header/Header';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <section className="background-wrapper">
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userName="PH_User"
      />
    </section>
  );
}

export default App;
