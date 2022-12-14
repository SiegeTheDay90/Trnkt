import SessionInfo from "../session/SessionInfo";
import LoginFormModal from "../session/LoginFormModal";
import NavCategories from "./NavCategories";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import './styles/Navigation.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";


const Navigation = () => {

  const [cartCount, setCartCount] = useState(0);

  const sessionCart = useSelector(state => state.session.cart);

  useEffect(() => {
    if(sessionCart){
      setCartCount(Object.values(sessionCart).length);
    } else {
      setCartCount(0);
    }
  }, [sessionCart])


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
        {cartCount}

      </div>

      <div className="navrow nav-category-container wide">
        <NavCategories />
      </div>

      <div className="side-bar-container narrow">
        <Sidebar />
      </div>
      

      <LoginFormModal />
    </nav>
    </div>
  )
}

export default Navigation;