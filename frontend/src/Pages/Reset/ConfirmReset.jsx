import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { storeErrors } from '../../store/errors.js';
import { resetPassword } from '../../store/session.js';

const ConfirmReset = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const errors = useSelector(state => state.errors);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');


    useEffect(() => {
        if(errors[0]){
            const prevalentError = errors[0];
            let errorContainer;
            let inputField;
            switch(prevalentError.slice(0, 5)){
                case "Code":
                    inputField = document.getElementById('credential');
                    errorContainer = document.getElementById('credentialError');
                    break;
                case "Passw":
                    inputField = document.getElementById('password');
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
            storeErrors([]);
        }
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirm){
            dispatch(resetPassword({credential, password}))
            .then(()=>history.push('/'))
            .catch(()=>alert("Something went wrong."))
        } else {
            storeErrors(["Passwords do not match."])
        }
    }


    return(
        <div id="ResetPassword">
            <h2>Reset Password</h2><br/>

            

            <form onSubmit={handleSubmit} className="Form">
                <div className="InputContainer">
                    <label htmlFor="credential">Code</label>
                    <input type="text" maxLength="6" id="credential" onChange={(e) => setCredential(e.target.value)} className="Input"/>
                    <span className="error" id="credentialError"></span>
                </div>
                
                <div className="InputContainer">
                    <label htmlFor="password">New Password</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="Input" />
                    <span className="error" id="passwordError"></span>
                </div>
                <div className="InputContainer">
                    <label htmlFor="confirm">Confirm New Password</label>
                    <input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="Input" />
                    <span className="error" id="confirmError"></span>
                </div>
                <div className="button-container">
                    <input className="button-large" type="submit" value="Reset" disabled={!password || !confirm}/>
                </div>
            </form>
        </div>
        
    )
}

export default ConfirmReset;