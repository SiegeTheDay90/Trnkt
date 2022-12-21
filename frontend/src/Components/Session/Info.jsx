import { useDispatch } from 'react-redux';
import { logout } from '../../store/session.js';
import './Info.css';

const SessionInfo = ({session}) => {
    const dispatch = useDispatch();

    const sessionUser = session.user;

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
            {
                sessionUser 
                ? <>
                    Welcome, {sessionUser.firstName}
                    <br/>
                    <button className="black nav-session-button" onClick={handleSubmit}>Logout</button>
                </>
                :   <button onClick={showLoginModal} id="SignInButton" className="white nav-session-button">Sign in</button>
            }
        </div>
    )
}

export default SessionInfo;