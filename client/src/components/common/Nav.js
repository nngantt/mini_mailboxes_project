import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


const Nav = () => {
    let navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let user = window.localStorage.getItem('user');
        user = JSON.parse(user);

        if (user != null) {
            setIsLoggedIn(true);
        }
    })

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <div className='d-flex justify-content-between'>
            <Link to='/'>Home</Link>
            {isLoggedIn ? 
                <button className='btn btn-danger' onClick={() => logout()}>Logout</button>
                :
                <button className='btn btn-primary' onClick={() => navigate('/login')}>Login</button>
            }
            
        </div>
    );
};

export default Nav;