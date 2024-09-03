import { signInWithPopup, signOut } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // ログインアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };
  return (
    <div>
      <p>ログインアウトする</p>
      <button onClick={handleLogout}>ログインアウト</button>
    </div>
  );
};

export default Logout;
