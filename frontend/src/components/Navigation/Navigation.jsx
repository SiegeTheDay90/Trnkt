import SessionInfo from "../session/SessionInfo";
import LoginFormModal from "../session/LoginFormModal";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


import './Navigation.css'
const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    const showLoginModal = (e) => {
      e.preventDefault();
      const modal = document.getElementById('OverlayContainer');
      modal.showModal();
    }

    return (
      <div className="header-container">
      <nav className="Navigation">
        <div className="navrow">
          <div>
            <Link to="/"><img className="logo" alt="mainLogo" src="logo.png"/></Link>
          </div>


          <SearchBar />


          <div>
            {sessionUser && <SessionInfo />} 
            {!sessionUser && <button onClick={showLoginModal} id="SignInButton" className="nav-button">Sign in</button>}<br/>
          </div>

          <div id="iconContainer">
            <i id="cart" className="fa-solid fa-cart-shopping"></i> 
          </div>
        </div>

        <div className="navrow nav-category-container">
          <span className="nav-category">Halloween Hub</span>
          <span className="nav-category">Jewelry & Accessories</span>
          <span className="nav-category">Clothing & Shoes</span>
          <span className="nav-category">Home & Living</span>
          <span className="nav-category">Wedding & Party</span>
          <span className="nav-category">Toys & Entertainment</span>
          <span className="nav-category">Art & Collectibles</span>
          <span className="nav-category">Craft Supplies</span>
          <span className="nav-category">Gifts & Gift Cards</span>
        </div>
        

        <LoginFormModal />
      </nav>
      </div>
    )
}

export default Navigation;