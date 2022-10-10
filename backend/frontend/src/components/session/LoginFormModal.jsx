import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {login, signup} from '../../store/session.js'

const LoginFormModal = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');
    
    const [formType, setFormType] = useState('login');
    


    const handleSubmit = (e) => {
        e.preventDefault();
        if(formType==='login'){
            const user = {credential, password};
            dispatch(login(user));
            document.getElementById('OverlayContainer').close();
        } else if(formType==='signup'){
            const user = {username, email, password};
    
            if(password === confirm){
                dispatch(signup(user));
            } else {
                return <Redirect to="/signup" />
            }
        }
    }

    if(sessionUser) return <Redirect to="/" />;


    if(formType==='login'){
        return(
            <div id="LoginModal">
                <div className="ModalDiv">
                    <h3>Sign in</h3>
                    <button className='ModalButton-R' onClick={() => setFormType('signup')}>Register</button>
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
                    <input className="ModalButton-S" type="submit" value="Sign in"/>
                </form>
                <div style={{'font-size': '12px', 'text-decoration': 'underline'}}>Trouble signing in?</div>
            <hr/>OR
            </div>
        )
    } else if (formType==='signup'){
        return(
        <div id="LoginModal">
            <div className="ModalDiv">
                <h3>Create your account</h3>
            </div>
            <div className="ModalDiv">
                <h4>Registration is easy.</h4>
            </div>
            
            <form onSubmit={handleSubmit} className="ModalForm">
                <label for="SignupUsername">Username *</label>
                <input id="SignupUsername" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="ModalInput"/>

                <label for="SignupEmail">Email *</label>
                <input id="SignupEmail" value={email} placeholder="user@email.com" onChange={(e) => setEmail(e.target.value)} className="ModalInput"/>
                
                <label for="SignupPassword">Password *</label>
                <input id="SignupPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="ModalInput"/>

                <input type="submit" value="Register" className="ModalButton-S"/>
            </form>
        </div>
        )
    }
}

export default LoginFormModal;