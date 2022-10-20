import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {login, signup} from '../../store/session.js'
import { storeErrors } from '../../store/errors.js';

const LoginFormModal = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const errors = useSelector(state => state.errors);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');

    
    const [formType, setFormType] = useState('login');

    const closeModal = () => {
        if(formType === 'login'){
            document.getElementById('emailError').style.display = "none";
            document.getElementById('passwordError').style.display = "none";
            const emailInput = document.getElementById('InputEmail');
            emailInput.style.background = "#ffffff";
            emailInput.style.border = "1px solid #cccccc";
            const passwordInput = document.getElementById('InputPassword');
            passwordInput.style.background = "#ffffff";
            passwordInput.style.border = "1px solid #cccccc";
        }
        setFormType('login');
        setCredential('');
        setPassword('');
        setFirstName('');
        setEmail('');
        document.getElementById('OverlayContainer').close();
    }

    useEffect(() => {
        if(sessionUser){
            closeModal();
        } else if(errors[0]){
            const prevalentError = errors[0];
            let errorContainer;
            let inputField;
            switch(prevalentError.slice(0, 5)){
                case "Email":
                    inputField = document.getElementById('InputEmail');
                    errorContainer = document.getElementById('emailError');
                    break;
                case "First":
                    inputField = document.getElementById('InputFirstName');
                    errorContainer = document.getElementById('firstNameError');
                    break;
                case "Passw":
                    inputField = document.getElementById('InputPassword');
                    errorContainer = document.getElementById('passwordError');
                    break;
                default:
                    alert("Uncaught Error in Sign Up");
            }
            if(errorContainer && inputField){
                errorContainer.innerHTML = prevalentError+'.';
                errorContainer.style.display = "block";
                inputField.style.background = "#ffdddd";
                inputField.style.border = "1px solid #bb0000";
            }
        }
    }, [errors, sessionUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formType==='login'){
            if(!credential){
                dispatch(storeErrors({errors:["Email can't be blank"]}));

            } else {
                const user = {credential, password};
                dispatch(login(user));
            }
        } else if(formType==='signup'){
            const user = {firstName, email, password};
            dispatch(signup(user));
        }
    }

    const demoClick = (e) => {
        e.preventDefault();
        dispatch(login({credential: 'demo@user.io', password: 'password'}))
    }

    return(
        <dialog id="OverlayContainer">
        <button id="CloseModalButton" onClick={closeModal}>×</button>
        {formType==='login' && 
        <div id="LoginModal">
            <div className="ModalDiv">
                <h3>Sign in</h3>
                <button className='ModalButton-R' onClick={() => setFormType('signup')}>Register</button>
            </div>

            <form onSubmit={handleSubmit} className="ModalForm">

                <div className="InputContainer">
                    <label htmlFor="InputEmail">Email address</label>
                    <input id="InputEmail" value={credential} onChange={(e) => setCredential(e.target.value)} className="ModalInput" require="true"/>
                    <span className="error" id="emailError"></span>
                </div>

                <div className="InputContainer">
                <label htmlFor="InputPassword">Password</label>
                <input id="InputPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="ModalInput" />
                <span className="error" id="passwordError"></span>
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

        </div>}
        {formType==='signup' && 
        <div id="LoginModal">
        <div className="ModalDiv">
            <h3>Create your account</h3>
        </div>
        <div className="ModalDiv">
            <h4>Registration is easy.</h4>
        </div>
        
        <form onSubmit={handleSubmit} className="ModalForm">
            <div className="InputContainer">
                <label htmlFor="InputEmail">Email <span style={{color: "#dd0000"}}>*</span></label>
                <input id="InputEmail" value={email} onChange={(e) => setEmail(e.target.value)} className="ModalInput"/>
                <span className="error" id="emailError"></span>



            </div>

            <div className="InputContainer">
                <label htmlFor="InputFirstName">First name <span style={{color: "#dd0000"}}>*</span></label>
                <input id="InputFirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="ModalInput"/>
                <span className="error" id="firstNameError"></span>
            </div>

            <div className="InputContainer">
                <label htmlFor="InputPassword">Password <span style={{color: "#dd0000"}}>*</span></label>
                <input id="InputPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="ModalInput"/>
                <span className="error" id="passwordError"></span>
            </div>


            <input type="submit" value="Register" className="ModalButton-S" disabled={!password || !firstName || !email}/>
        </form>
        </div>}
        </dialog>
    )
}

export default LoginFormModal;