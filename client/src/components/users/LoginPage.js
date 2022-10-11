import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginPage(props) {
    const { isLoggedIn, logIn } = props;
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    })

    const loginUser = () => {
        if (email == '' || password == '') {
            setError('All fields are required.');
            return;
        }

        setError('');

        const data = {
            email: email,
            password: password
        }


        axios.post('http://localhost:8000/api/login', data)
        .then((res) => {
            console.log(res.data.user);
            if (res.data.user) {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                logIn();
                navigate('/profile');
                return;
            } else {
                setError(res.data.message);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center mb-5">
                <h1>Login Page</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 flex-column">
                    <div class="form-group mb-2">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p className="text-danger">{error}</p>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={() => loginUser()}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;