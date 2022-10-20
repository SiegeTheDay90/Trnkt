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
        <input id="SearchText" placeholder='Search for anything'/>
        <button type="submit" id="SearchSubmit" className="nav-button">&#x2315;</button>
      </form>
    )
}

export default SearchBar;