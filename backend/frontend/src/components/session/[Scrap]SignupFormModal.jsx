import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {signup} from '../../store/session.js'

const SignupFormModal = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username, email, password};

        if(password === confirm){
            dispatch(signup(user));
        } else {
            return <Redirect to="/signup" />
        }
    }

    if(sessionUser) return <Redirect to="/" />;

    return(
        <div>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                </label>

                <label>
                    Email:
                    <input value={email} placeholder="user@email.com" onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <label>
                    Confirm Password:
                    <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)}/>
                </label>

                <input type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default SignupFormModal;