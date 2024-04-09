import './Main.css';
import SearchForm from '../SearchForm/SearchForm';

function Main() {
  return (
    <main className="main">
      <div className="main__wrapper">
        <h2 className="main__heading">What&apos;s going on in the world?</h2>
        <p className="main__paragraph">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </div>
    </main>
  );
}

export default Main;
