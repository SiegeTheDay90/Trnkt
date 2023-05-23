import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestResetPassword } from '../../store/session.js';

const RequestReset = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(requestResetPassword({credential})).then(() => {
            document.getElementById("message").style.display = "block";
            document.getElementById("ResetPassword").style.display = "none";
        }).catch(()=>alert("Something went wrong."))
    }


    return(
        <>
        <div id="ResetPassword">
            <h2>Reset Password</h2><br/>

            <form onSubmit={handleSubmit} className="Form">
                
                <div className="InputContainer">
                    <label htmlFor="credential">Email</label>
                    <input id="credential" type="credential" value={credential} onChange={(e) => setCredential(e.target.value)} className="Input" />
                </div>

                <div className="button-container">
                    <input className="button-large" type="submit" value="Submit" disabled={!credential}/>
                </div>
            </form>
        </div>
        <div id="message" className="message">
            Check email for reset instructions. Remember to check the spam folder.
        </div>
        </>
    )
}

export default RequestReset;