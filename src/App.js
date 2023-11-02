import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routers';

export default function App() {
  //  const navigate = useNavigate();

  //  const handleNavigate = () => {
  //    navigate('/login');
  //  };

  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}
