import { useEffect } from 'react';
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
    
    useEffect(() => {}, [sessionUser])
    return(
        <div>
            {sessionUser.firstName}
            {sessionUser.first_name}<br/>
            <button onClick={handleSubmit}>Logout</button>
        </div>
    )
}

export default SessionInfo;