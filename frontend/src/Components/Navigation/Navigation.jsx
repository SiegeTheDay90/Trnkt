import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SessionInfo from "../Session/Info.jsx";
import LoginFormModal from "../Session/LoginFormModal.jsx";
import NavCategories from "./NavCategories.jsx";
import SearchBar from "../Search/SearchBar.jsx";
import CartButton from "./CartButton.jsx";
import './styles/Navigation.css'


const Navigation = () => {

  const session = useSelector(state => state.session)
  
  return (
    <nav className="navigation">

      <div className="navrow">
        <Link to="/" tabindex="0">
          <img className="logo" alt="mainLogo" src="https://i.ibb.co/5cm3p8n/logo.png"/>
        </Link>

        <SearchBar />

        <SessionInfo session = {session}/> 

        <CartButton session = {session}/>
      </div>

      <NavCategories />
      
      <LoginFormModal />
    </nav>
  )
}

export default Navigation;