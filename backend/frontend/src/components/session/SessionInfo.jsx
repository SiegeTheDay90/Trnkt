import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { logout } from '../../store/session.js'

const SessionInfo = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    if(!sessionUser) return <Redirect to="/login" />;

    return(
        <div>
            User: {sessionUser.username}<br/>
            <button onClick={handleSubmit}>Logout</button>
        </div>
    )
}

export default SessionInfo;