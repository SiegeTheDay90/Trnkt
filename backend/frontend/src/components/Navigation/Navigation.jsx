import SessionInfo from "../session/SessionInfo";
import FormModal from './FormModal';
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
      <nav className="Navigation">
        <div>
          <Link to="/"><img src="logo.png"/></Link>
        </div>

        {sessionUser && <SessionInfo />}

        <img src="fake_search.png" width="70%" />


        <div>
          {!sessionUser && <Link to="/" onClick={showLoginModal}>Sign In</Link>}<br/>
        </div>
        <div>
          Cart Icon
        </div>

        <FormModal />
      </nav>
    )
}

export default Navigation;