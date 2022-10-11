import {useState, useEffect} from 'react';
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

    
    const [formType, setFormType] = useState('login');


    const handleSubmit = (e) => {
        e.preventDefault();
        if(formType==='login'){
            if(!credential){
                const emailError = document.getElementById('emailError');
                const emailInput = document.getElementById('LoginEmail');
                emailError.style.display = "block";
                emailInput.style.background = "#ffdddd";
                emailInput.style.border = "1px solid #bb0000";
            } else {
                const user = {credential, password};
                dispatch(login(user));
                if(sessionUser){
                    document.getElementById('OverlayContainer').close();
                } else {
                    const passwordError = document.getElementById('passwordError');
                    passwordError.style.display = "block";
                }
            }
            // const user = {credential, password};
            // dispatch(login(user));
            // document.getElementById('OverlayContainer').close();
        } else if(formType==='signup'){
            const user = {username, email, password};
            dispatch(signup(user));
        }
    }

    const demoClick = (e) => {
        e.preventDefault();
        dispatch(login({credential: 'demo@user.io', password: 'password'}))
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

                    <div className="InputContainer">
                    <label htmlFor="LoginEmail">Email address</label>
                    <input id="LoginEmail" value={credential} onChange={(e) => setCredential(e.target.value)} className="ModalInput" require="true"/>
                    <span className="error" id="emailError">Email can't be blank.</span>
                    </div>

                    <div className="InputContainer">
                    <label htmlFor="LoginPassword">Password</label>
                    <input id="LoginPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="ModalInput" />
                    <span className="error" id="passwordError">Password was incorrect</span>
                    </div>
                    <div className="ModalDiv">
    
                        <div className="StaySignedIn"><input type="checkbox" id="ModalCheck"/> Stay signed in</div> 
    
                        <div style={{'fontSize': '12px', 'textDecoration': 'underline'}}>Forgot your password?</div>
    
                    </div>
                    <input className="ModalButton-S" type="submit" value="Sign in" disabled={!password}/>
                </form>
                <div style={{'fontSize': '12px', 'textDecoration': 'underline'}}>Trouble signing in?</div>
                <div style={{'fontSize': '14px'}}><hr/>OR</div>
                <input className="ModalButton-S" type="button" value="Demo User" onClick={demoClick}/>

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
                <label htmlFor="SignupUsername">Username *</label>
                <input id="SignupUsername" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="ModalInput"/>

                <label htmlFor="SignupEmail">Email *</label>
                <input id="SignupEmail" value={email} placeholder="user@email.com" onChange={(e) => setEmail(e.target.value)} className="ModalInput"/>
                
                <label htmlFor="SignupPassword">Password *</label>
                <input id="SignupPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="ModalInput"/>

                <input type="submit" value="Register" className="ModalButton-S" disabled={!password || !username || !email}/>
            </form>
        </div>
        )
    }
}

export default LoginFormModal;