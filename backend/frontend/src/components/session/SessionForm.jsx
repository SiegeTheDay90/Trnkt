import {useState, useEffect} from 'react';
// import { useSelector, useDispatch } from 'react-redux'

const SessionForm = () => {
    // const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {credential, password};
        // const dispatch(, {method: 'POST'}
        console.log(`Login!\nUsername: ${credential}\nPassword: ${password}`);
        // console.log(e.target.value);
    }

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

export default SessionForm;