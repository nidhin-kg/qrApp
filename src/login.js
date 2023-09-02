
import React, { useState } from 'react';
import QRCode from 'qrcode.react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [registrationQRCode, setRegistrationQRCode] = useState(null);

  const handleLogin = () => {
    if (username === 'nidhin' && password === 'nidhin') {
      onLogin();
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegister = () => {
    setRegistrationQRCode('https://www.initsolutions.in/#/home');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {loggedIn ? (
                <div>
                  <h2 className="card-title text-center">QR Code for BookSeva</h2>
                  <QRCode value="https://bookseva.com/devotee-home-page" />
                </div>
              ) : (
                <div>
                  <h2 className="card-title text-center mb-4">Log In</h2>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="username"
                        placeholder="Username or Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control mb-4"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-block btn-lg font-weight-bold login"
                      onClick={handleLogin}
                    >
                      Log In
                    </button>
                  </form>
                  <hr />
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-success register"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  </div>
                </div>
              )}
              {registrationQRCode && (
                <div className="text-center mt-3">
                  <h2 className="card-title text-center qr-title">Registration QR Code</h2>
                  <div className="qr-code-container">
                    <QRCode value={registrationQRCode} size={200} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
