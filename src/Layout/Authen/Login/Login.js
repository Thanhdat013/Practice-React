import Form from 'react-bootstrap/Form';

import './Login.scss';
import { Button, Container } from 'react-bootstrap';

function Login() {
    return (
        <div className="login__container">
            <div className="login__wrap">
                <span className="login__title">LOGIN</span>
                <input className="login__type" type="text" placeholder="EMAIL" />
                <input className="login__type" type="password" placeholder="PASSWORD" />
                <p className="login__forgot">FORGOT YOUR PASSWORD</p>
            </div>
            <div className="login__button">
                <button className="login__btn login__btn--register">REGISTER</button>
                <button className="login__btn login__btn--signup"> SIGN IN</button>
            </div>
        </div>
    );
}

export default Login;
