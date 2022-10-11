import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
    let navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const data = window.localStorage.getItem('user');
        if ( data !== null ) {
            setIsLoggedIn(true);
        } else {
            navigate('/login');
        }
    }, []);
    
    return children;
};

export default ProtectedRoute;