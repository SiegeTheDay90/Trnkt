import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {login} from '../../store/session.js'

const LoginFormModal = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {credential, password};
        dispatch(login(user));
        document.getElementById('OverlayContainer').close();
    }

    const closeModal = (e) => {
        e.preventDefault();
        document.getElementById('OverlayContainer').close();
    }

    if(sessionUser) return <Redirect to="/" />;

    return(
    <dialog id="OverlayContainer">
        <button id="CloseModalButton" onClick={closeModal}>×</button>
        <div id="LoginModal">
            <div className="ModalDiv">
                <h3>Sign in</h3>
                <button className='ModalButton-R'>Register</button>
            </div>

            <form onSubmit={handleSubmit} className="ModalForm">
                <label for="LoginEmail">Email address</label>
                <input id="LoginEmail" value={credential} onChange={(e) => setCredential(e.target.value)} className="ModalInput" /><br/>
                
                <label for="LoginPassword">Password</label>
                <input id="LoginPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="ModalInput" /><br/>
                
                <div className="ModalDiv">

                    <div className="StaySignedIn"><input type="checkbox" id="ModalCheck"/> Stay signed in</div> 

                    <div style={{'font-size': '12px', 'text-decoration': 'underline'}}>Forgot your password?</div>

                </div>
                <input id="ModalButton-S" type="submit" value="Sign in"/>
            </form>
            <div style={{'font-size': '12px', 'text-decoration': 'underline'}}>Trouble signing in?</div>
        <hr/>OR
        </div>
    </dialog>
    )
}

export default LoginFormModal;