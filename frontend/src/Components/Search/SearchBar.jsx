import { useHistory } from 'react-router-dom';
import './SearchBar.css'


const SearchBar = () => {

  const history = useHistory();

  const searchSubmit = (e) => {
    e.preventDefault();
    const query = document.getElementById('SearchText').value;

    const terms = query.split(" ");

    history.push(`/search/${terms[0]}`)
  }
    return (
      <form id="SearchBar" onSubmit={searchSubmit}>
        <input tabindex="1" id="SearchText" placeholder='Search for anything'/>
        <button tabindex = "1" type="submit" id="SearchSubmit" className="search-button">&#x2315;</button>
      </form>
    )
}

export default SearchBar;