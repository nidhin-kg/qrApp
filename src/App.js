
import React, { useState } from 'react';
import LoginForm from './login';
import QRCode from 'qrcode.react';
import "./index.css"



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
            <h2 className="card-title text-center">QR Code for BookSeva</h2>
            <QRCode value="https://bookseva.com/devotee-home-page" />
              
            </div>
          </div>
        </div>
      ) : (
        <LoginForm onLogin={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
