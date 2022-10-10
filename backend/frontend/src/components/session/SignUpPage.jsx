import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {login} from '../../store/session.js'

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username, password};
        dispatch(login(user));
    }

    if(sessionUser) return <Redirect to="/" />;

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input value={username} placeholder="Username or Email" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Username:
                    <input value={username} placeholder="Username or Email" onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <input type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default LoginFormPage;