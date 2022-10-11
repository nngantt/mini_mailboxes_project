import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import MailboxPage from './components/mailbox/MailboxPage';
import LoginPage from './components/users/LoginPage';
import Home from './components/Home';
import ProtectedRoute from './components/common/ProtectedRoute';
import Profile from './components/profile/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const data = window.localStorage.getItem('user');
    if ( data !== null ) setIsLoggedIn(true);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<LoginPage isLoggedIn={isLoggedIn} logIn={logIn} />} />
        <Route path='/' element={<Home />} />
        <Route path='/mailboxes' element={<MailboxPage />} />
        <Route path="/profile" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}><Profile /></ProtectedRoute>
        } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
