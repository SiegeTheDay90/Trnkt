import { useSelector } from 'react-redux';
import './SearchBar.css'


const SearchBar = () => {

    return (
      <form id="SearchBar">
        <input id="SearchText" placeholder='Search for anything'/>
        <button type="button" id="SearchSubmit" className="nav-button">&#x2315;</button>
      </form>
    )
}

export default SearchBar;