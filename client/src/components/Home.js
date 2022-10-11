import { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const routeChange = (path) => {
    navigate(path);
  }

  useEffect(() => {
    let user = window.localStorage.getItem('user');
    user = JSON.parse(user);

    if (user != null) {
        setIsLoggedIn(true);
    }
})

  return (
    <div className="container pt-5">
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center">
          <h1>Welcome to Virtual Mailbox Store</h1>
        </div>
        <div className="d-flex justify-content-center pt-5">
          <div className="d-flex flex-column">
              <h3 className="mb-5">What do you want to do today?</h3>
              
              <button className="btn btn-primary mb-4" onClick={() => routeChange("/mailboxes")}>
                Purchase a virtual mailbox
              </button>

              {!isLoggedIn &&  
                <button className="btn btn-primary" onClick={() => routeChange("/login")}>
                  Login
                </button>
              }
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home;
