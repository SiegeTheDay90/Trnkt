import SessionInfo from "../session/SessionInfo";
import LoginFormModal from "../session/LoginFormModal";
import NavCategories from "./NavCategories";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import './Navigation.css'


const Navigation = () => {

    return (
      <div className="header-container">
      <nav className="Navigation">
        <div className="navrow">
          <div>
            <Link to="/"><img className="logo" alt="mainLogo" src="https://i.ibb.co/5cm3p8n/logo.png"/></Link>

          </div>


          <SearchBar />


          <div>
            <SessionInfo /> 
          </div>

          <Link to="/cart"><button id="cart-button" className="button-white"><i id="cart" className="fa-solid fa-cart-shopping"></i></button></Link>

        </div>

        <div className="navrow nav-category-container">
          <NavCategories />
        </div>
        

        <LoginFormModal />
      </nav>
      </div>
    )
}

export default Navigation;