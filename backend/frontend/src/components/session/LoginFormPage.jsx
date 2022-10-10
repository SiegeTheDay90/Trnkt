import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {login} from '../../store/session.js'

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {credential, password};
        dispatch(login(user));
    }

    if(sessionUser) return <Redirect to="/" />;

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input value={credential} placeholder="Username or Email" onChange={(e) => setCredential(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default LoginFormPage;