import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/session.js';
import '../Navigation/Navigation.css';

const SessionInfo = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    const showLoginModal = (e) => {
        e.preventDefault();
        const modal = document.getElementById('OverlayContainer');
        modal.showModal();
        document.getElementById('App').style.overflow = "hidden";
    }
    
    return(
        <div id="user-card">
            {!sessionUser && <button onClick={showLoginModal} id="SignInButton" className="nav-session-button">Sign in</button>}<br/>
            {sessionUser && <>Welcome, {sessionUser.firstName}<br/>
            <button className="nav-session-button" onClick={handleSubmit}>Logout</button></>}
        </div>
    )
}

export default SessionInfo;