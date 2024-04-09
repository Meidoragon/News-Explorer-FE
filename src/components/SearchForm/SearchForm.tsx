import './SearchForm.css';

function SearchForm(): JSX.Element {
  return (
    <div className="search-form">
      <input className="search-form__input" placeholder="Enter topic" />
      <button className="search-form__button" type="button">
        Search
      </button>
    </div>
  );
}

export default SearchForm;
