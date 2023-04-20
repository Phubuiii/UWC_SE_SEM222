import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faKey} from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        console.log('Username: $(username), Password: $(password)');

    };
    return(
        
        <form onSubmit={handleSubmit}>
            <h1> 
                UWC 2.0
            </h1>
            <label className="placeholder" htmlFor="Email">
                <FontAwesomeIcon icon={faUser} fontSize={50} />
                <input type="username" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            </label >
            <br />
            <label className="placeholder" htmlFor="password" >
                <FontAwesomeIcon icon={faKey} fontSize={50} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Login</button>
            <div>
                <a href="#"  > Forgot your password?</a>
            </div>
        </form>
    );
};
export default Login;
